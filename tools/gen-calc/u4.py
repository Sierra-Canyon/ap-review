"""Unit 4, Contextual Applications of Differentiation. Every key and wrong choice is computed."""
from core import *

def distinct(*v):
    if len(set(simplify(sympify(a)) for a in v)) < len(v):
        raise Skip("same")

# ---------------------------------------------------------------- 4.1 meaning of the derivative in context
CTX = [("W", "t", "the amount of water in a tank, in gallons", "minutes", "gallons", "gallons per minute"),
       ("P", "t", "the population of a town", "years", "people", "people per year"),
       ("T", "t", "the temperature of a cup of coffee, in degrees Fahrenheit", "minutes", "degrees Fahrenheit", "degrees Fahrenheit per minute"),
       ("C", "x", "the cost, in dollars, of making $x$ chairs", "chairs", "dollars", "dollars per chair"),
       ("H", "t", "the height of a plant, in centimeters", "days", "centimeters", "centimeters per day")]

def t41_meaning(r):
    F, v, what, tu, yu, ru = r.choice(CTX); a = r.choice([3, 5, 10, 12]); k = r.choice([-4, -2, 6, 15])
    word = "increasing" if k > 0 else "decreasing"
    q = rf"Let ${F}({v})$ be {what}, where ${v}$ is measured in {tu}. Which statement best explains ${F}'({a}) = {k}$?"
    at = f"${v} = {a}$" if v == "t" else f"{a} chairs"
    return item("4.1", q, (text_choice(f"When {at}, the quantity is {word} at a rate of {abs(k)} {ru}."), rf"The derivative is a rate of change, measured in {ru}; its sign tells the direction."),
        [(text_choice(f"When {at}, the quantity is {abs(k)} {yu}."), r"That would be a value of the function, not of its derivative."),
         (text_choice(f"Over the first {a} {tu}, the quantity changes by a total of {k} {yu}."), r"A derivative is an instantaneous rate at one input, not a total change over an interval."),
         (text_choice(f"When {at}, the quantity is {'decreasing' if k > 0 else 'increasing'} at a rate of {abs(k)} {ru}."), r"The sign of the derivative is reversed here.")])

SING = {"gallons": "gallon", "people": "person", "degrees Fahrenheit": "degree Fahrenheit", "dollars": "dollar", "centimeters": "centimeter"}

def t41_units(r):
    F, v, what, tu, yu, ru = r.choice(CTX)
    q = rf"Let ${F}({v})$ be {what}, where ${v}$ is measured in {tu}. What are the units of ${F}'({v})$?"
    return item("4.1", q, (text_choice(ru), rf"A derivative has the units of the output divided by the units of the input: {yu} per {tu.rstrip('s') if tu != 'chairs' else 'chair'}."),
        [(text_choice(yu), r"Those are the units of the function, not of its rate of change."),
         (text_choice(f"{tu} per {SING[yu]}"), r"The ratio is upside down; it is output over input."),
         (text_choice(f"{yu} per {tu.rstrip('s')} per {tu.rstrip('s')}" if tu != "chairs" else "dollars per chair per chair"), r"Those are the units of the second derivative.")])
t41_units.max = 2

def t41_estimate(r):
    ts = [0, 2, 5, 9, 12]; vals = [r.choice(range(10, 40)) for _ in ts]
    i = r.choice([1, 2, 3])
    val = Rational(vals[i + 1] - vals[i], ts[i + 1] - ts[i])
    w1 = Rational(vals[i + 1] - vals[i - 1], ts[i + 1] - ts[i - 1]) ; w2 = vals[i + 1] - vals[i]; w3 = Rational(ts[i + 1] - ts[i], vals[i + 1] - vals[i]) if vals[i + 1] != vals[i] else 0
    distinct(val, w1, w2, w3)
    tab = ", ".join(f"$W({a}) = {b}$" for a, b in zip(ts, vals))
    mid = Rational(ts[i] + ts[i + 1], 2)
    q = rf"The amount of water in a tank, $W(t)$ gallons, is differentiable for $0 \le t \le 12$ minutes. Selected values are {tab}. Using the values on the smallest interval containing $t = {L(mid)}$, what is the best estimate of $W'({L(mid)})$ in gallons per minute?"
    return item("4.1", q, (num(val), rf"$W'({L(mid)}) \approx \dfrac{{W({ts[i + 1]}) - W({ts[i]})}}{{{ts[i + 1]} - {ts[i]}}} = {L(val)}$."),
        [(num(w1), r"This uses a wider interval than needed."),
         (num(w2), r"This is the change in $W$, not divided by the change in $t$."),
         (num(w3), r"This divides the change in $t$ by the change in $W$.")])

def t41_second(r):
    F, v, what, tu, yu, ru = r.choice(CTX[:3] + CTX[4:])
    q = rf"Let ${F}({v})$ be {what}, where ${v}$ is measured in {tu}. At ${v} = 4$, ${F}'(4) > 0$ and ${F}''(4) < 0$. Which statement is true at ${v} = 4$?"
    return item("4.1", q, (text_choice("The quantity is increasing, and its rate of increase is decreasing."), r"$F' > 0$ means increasing; $F'' < 0$ means the rate $F'$ is decreasing."),
        [(text_choice("The quantity is increasing, and its rate of increase is increasing."), r"$F'' < 0$ means the rate is going down."),
         (text_choice("The quantity is decreasing, and its rate of change is decreasing."), r"$F' > 0$ means the quantity is going up."),
         (text_choice("The quantity is decreasing, and its rate of change is increasing."), r"Both signs are read backward here.")])
t41_second.max = 1

# ---------------------------------------------------------------- 4.2 straight-line motion
def t42_speed(r):
    a = r.choice([1, 2]); b = r.choice([-6, -9, -12]); c = r.choice([5, 9]); T = r.choice([1, 2, 4])
    s = a * t**3 + b * t**2 + c * t
    v = diff(s, t).subs(t, T); acc = diff(s, t, 2).subs(t, T)
    if v == 0 or acc == 0: raise Skip("zero")
    inc = (v > 0) == (acc > 0)
    q = rf"A particle moves along the $x$-axis with position $x(t) = {L(s)}$. At $t = {T}$, is the speed of the particle increasing or decreasing?"
    rt = "Increasing, because the velocity and acceleration have the same sign." if inc else "Decreasing, because the velocity and acceleration have opposite signs."
    return item("4.2", q, (text_choice(rt), rf"$v({T}) = {v}$ and $a({T}) = {acc}$. Speed increases when $v$ and $a$ have the same sign."),
        [(text_choice("Increasing, because the velocity and acceleration have opposite signs." if not inc else "Decreasing, because the velocity and acceleration have the same sign."), r"Speed increases exactly when velocity and acceleration have the same sign."),
         (text_choice("Increasing, because the velocity is positive." if v > 0 else "Decreasing, because the velocity is negative."), r"The sign of velocity alone gives direction, not whether speed is growing."),
         (text_choice("Increasing, because the acceleration is positive." if acc > 0 else "Decreasing, because the acceleration is negative."), r"The sign of acceleration alone does not decide it; compare it with the velocity.")])

def t42_rest(r):
    p, q0 = r.choice([(1, 3), (2, 5), (1, 4), (3, 4)])
    s = t**3 - Rational(3, 2) * (p + q0) * t**2 + 3 * p * q0 * t
    w3 = Rational(p + q0, 2)
    q = rf"A particle moves along a line with position $s(t) = {L(s)}$ for $t \ge 0$. At what times is the particle at rest?"
    return item("4.2", q, (text_choice(f"$t = {p}$ and $t = {q0}$"), rf"$v(t) = 3t^{{2}} - {3 * (p + q0)}t + {3 * p * q0} = 3(t - {p})(t - {q0})$, which is $0$ at $t = {p}$ and $t = {q0}$."),
        [(text_choice("$t = 0$ only"), r"This is when the position is $0$, not the velocity."),
         (text_choice(f"$t = {L(w3)}$ only"), r"This is when the acceleration is $0$."),
         (text_choice(f"$t = 0$, $t = {p}$, and $t = {q0}$"), r"At $t = 0$ the velocity is not $0$.")])

def t42_accel_when_v0(r):
    k = r.choice([2, 3, 4])
    v = t**2 - k**2
    a = diff(v, t).subs(t, k)
    q = rf"A particle moves along a line with velocity $v(t) = {L(v)}$ for $t \ge 0$. What is the acceleration of the particle when it is at rest?"
    return item("4.2", q, (num(a), rf"$v = 0$ at $t = {k}$, and $a(t) = 2t$, so $a({k}) = {a}$."),
        [("0", r"At rest means velocity is $0$, not acceleration."),
         (num(k), r"This is the time the particle is at rest, not its acceleration."),
         (num(-k**2), r"This is $v(0)$.")])
t42_accel_when_v0.max = 1

# ---------------------------------------------------------------- 4.3 rates in other contexts
def t43_rate(r):
    a = r.choice([2, 3, 5]); b = r.choice([20, 40, 60]); T = r.choice([1, 2, 4])
    P = b * exp(Rational(1, 10) * t) if False else b + a * t**2
    val = diff(P, t).subs(t, T)
    w1 = P.subs(t, T); w2 = Rational(P.subs(t, T) - P.subs(t, 0), T); w3 = diff(P, t, 2).subs(t, T)
    distinct(val, w1, w2, w3)
    q = rf"The number of bacteria in a dish is $B(t) = {L(P)}$ thousand, where $t$ is in hours. At what rate, in thousands per hour, is the number changing at $t = {T}$?"
    return item("4.3", q, (num(val), rf"$B'(t) = {L(diff(P, t))}$, so $B'({T}) = {val}$."),
        [(num(w1), r"This is the amount at that time, not the rate."),
         (num(w2), r"This is the average rate from $t = 0$, not the rate at an instant."),
         (num(w3), r"This is $B''$, the rate at which the rate changes.")])

def t43_cost(r):
    a = r.choice([Rational(1, 2), 2, 3]); b = r.choice([10, 20]); c = 500; n = r.choice([10, 20, 30])
    C = a * x**2 + b * x + c
    val = diff(C, x).subs(x, n)
    w1 = C.subs(x, n); w2 = C.subs(x, n) / n; w3 = (2 * a * x).subs(x, n)
    distinct(val, w1, w2, w3)
    q = rf"The cost, in dollars, of making $x$ units is $C(x) = {L(C)}$. What is $C'({n})$, the marginal cost at $x = {n}$, in dollars per unit?"
    return item("4.3", q, (num(val), rf"$C'(x) = {L(diff(C, x))}$, so $C'({n}) = {L(val)}$."),
        [(num(w1), r"This is the total cost of making that many units."),
         (num(w2), r"This is the average cost per unit."),
         (num(w3), r"The derivative of the linear term is left out.")])

def t43_temp(r):
    k = r.choice([1, 2, 3, 4, 5]); A = r.choice([60, 70, 72]); T0 = r.choice([180, 200, 190]); T = 0
    f = A + (T0 - A) * exp(-Rational(1, 10) * k * t)
    val = diff(f, t).subs(t, T)
    w1 = -val; w2 = f.subs(t, T); w3 = (T0 - A) * exp(-Rational(k, 10) * T)
    distinct(val, w1, w2, w3)
    q = rf"The temperature of a drink, in degrees Fahrenheit, is $H(t) = {A} + {T0 - A}e^{{-{L(Rational(k, 10))}t}}$, where $t$ is in minutes. What is $H'({T})$?"
    return item("4.3", q, (L(val), rf"$H'(t) = {T0 - A}\left(-{L(Rational(k, 10))}\right)e^{{-{L(Rational(k, 10))}t}}$; at $t = {T}$ this is ${L(val)}$ degrees per minute."),
        [(L(w1), r"The drink is cooling, so the rate is negative."),
         (L(w2), r"This is the temperature, not its rate of change."),
         (L(w3), r"This leaves out the factor from the exponent's derivative.")])

# ---------------------------------------------------------------- 4.4 and 4.5 related rates
def t44_circle(r):
    rr = r.choice([3, 5, 10]); dr = r.choice([2, 3, Rational(1, 2)])
    val = 2 * pi * rr * dr
    q = rf"The radius of a circle is increasing at ${L(dr)}$ cm per second. How fast is the area increasing, in square cm per second, when the radius is ${rr}$ cm?"
    return item("4.4", q, (L(val), rf"$A = \pi r^{{2}}$, so $\dfrac{{dA}}{{dt}} = 2\pi r\dfrac{{dr}}{{dt}} = 2\pi({rr})({L(dr)}) = {L(val)}$."),
        [(L(2 * pi * rr), r"This leaves out $\dfrac{dr}{dt}$."),
         (L(pi * rr**2 * dr), r"This multiplies the area by $\dfrac{dr}{dt}$ instead of differentiating."),
         (L(2 * pi * dr), r"The radius is left out of $2\pi r$.")])

def t44_sphere(r):
    rr = r.choice([2, 3, 5]); dr = r.choice([1, 2, Rational(1, 2)])
    val = 4 * pi * rr**2 * dr
    q = rf"The radius of a spherical balloon is increasing at ${L(dr)}$ inches per minute. How fast is the volume increasing, in cubic inches per minute, when the radius is ${rr}$ inches? $\left(V = \tfrac{{4}}{{3}}\pi r^{{3}}\right)$"
    return item("4.4", q, (L(val), rf"$\dfrac{{dV}}{{dt}} = 4\pi r^{{2}}\dfrac{{dr}}{{dt}} = 4\pi({rr})^{{2}}({L(dr)}) = {L(val)}$."),
        [(L(4 * pi * rr**2), r"This leaves out $\dfrac{dr}{dt}$."),
         (L(Rational(4, 3) * pi * rr**3 * dr), r"This multiplies the volume by $\dfrac{dr}{dt}$ instead of differentiating."),
         (L(4 * pi * rr * dr), r"The derivative of $r^{3}$ is $3r^{2}$, so $r$ is squared.")])

def t44_square(r):
    s = r.choice([4, 6, 10]); ds = r.choice([2, 3, 5])
    val = 2 * s * ds
    distinct(val, 2 * s, s**2 * ds, 4 * ds)
    q = rf"Each side of a square is growing at ${ds}$ cm per second. How fast is the area of the square growing when each side is ${s}$ cm long?"
    return item("4.4", q, (text_choice(f"${val}$ square cm per second"), rf"$A = s^{{2}}$, so $\dfrac{{dA}}{{dt}} = 2s\dfrac{{ds}}{{dt}} = 2({s})({ds}) = {val}$."),
        [(text_choice(f"${2 * s}$ square cm per second"), r"This leaves out $\dfrac{ds}{dt}$."),
         (text_choice(f"${s**2 * ds}$ square cm per second"), r"This multiplies the area by the rate instead of differentiating."),
         (text_choice(f"${4 * ds}$ cm per second"), r"That is the rate of change of the perimeter.")])

def t44_chain(r):
    k = r.choice([2, 3]); dxdt = r.choice([4, 5, -2]); x0 = r.choice([1, 2])
    y = x**k + 1
    val = diff(y, x).subs(x, x0) * dxdt
    distinct(val, diff(y, x).subs(x, x0), y.subs(x, x0) * dxdt, dxdt)
    q = rf"Both $x$ and $y$ depend on $t$, with $y = {L(y)}$. If $\dfrac{{dx}}{{dt}} = {dxdt}$ when $x = {x0}$, what is $\dfrac{{dy}}{{dt}}$ at that moment?"
    return item("4.4", q, (num(val), rf"$\dfrac{{dy}}{{dt}} = {L(diff(y, x))}\dfrac{{dx}}{{dt}} = {diff(y, x).subs(x, x0)}({dxdt}) = {val}$."),
        [(num(diff(y, x).subs(x, x0)), r"This is $\dfrac{dy}{dx}$; it still needs the factor $\dfrac{dx}{dt}$."),
         (num(y.subs(x, x0) * dxdt), r"This multiplies $y$ by $\dfrac{dx}{dt}$ instead of differentiating."),
         (num(dxdt), r"This is $\dfrac{dx}{dt}$.")])

def t45_ladder(r):
    Lh, xb, dx = r.choice([(5, 3, 2), (10, 6, 3), (13, 5, 2), (10, 8, 3), (25, 7, 2)])
    yb = int(sqrt(Lh**2 - xb**2)); val = Rational(-xb * dx, yb)
    q = rf"A ${Lh}$-foot ladder leans against a wall. The bottom slides away from the wall at ${dx}$ feet per second. How fast is the top sliding down the wall when the bottom is ${xb}$ feet from the wall?"
    return item("4.5", q, (text_choice(f"${L(-val)}$ feet per second"), rf"$x^{{2}} + y^{{2}} = {Lh**2}$, so $2x\dfrac{{dx}}{{dt}} + 2y\dfrac{{dy}}{{dt}} = 0$. With $x = {xb}$, $y = {yb}$: $\dfrac{{dy}}{{dt}} = -\dfrac{{{xb}({dx})}}{{{yb}}} = {L(val)}$, so the top falls at ${L(-val)}$ feet per second."),
        [(text_choice(f"${dx}$ feet per second"), r"The two ends do not move at the same rate."),
         (text_choice(f"${L(Rational(yb * dx, xb))}$ feet per second"), r"The ratio is upside down; $\dfrac{dy}{dt} = -\dfrac{x}{y}\dfrac{dx}{dt}$."),
         (text_choice(f"${L(Rational(xb * dx, Lh))}$ feet per second"), r"This divides by the ladder length instead of the height $y$.")])

def t45_cone(r):
    hh, rr, dV, h0 = r.choice([(10, 5, 8, 4), (12, 4, 9, 6), (6, 3, 4, 2), (8, 4, 2, 4)])
    k = Rational(rr, hh)  # r = k h, V = pi/3 k^2 h^3, dV = pi k^2 h^2 dh
    val = dV / (pi * k**2 * h0**2)
    q = rf"Water drains into a cone with its point down. The cone is ${hh}$ feet tall with a top radius of ${rr}$ feet. Water flows in at ${dV}$ cubic feet per minute. How fast is the water level rising when the water is ${h0}$ feet deep? $\left(V = \tfrac{{1}}{{3}}\pi r^{{2}}h\right)$"
    return item("4.5", q, (text_choice(f"${L(val)}$ feet per minute"), rf"By similar triangles $r = {L(k)}h$, so $V = \dfrac{{\pi}}{{3}}\left({L(k)}\right)^{{2}}h^{{3}}$ and $\dfrac{{dV}}{{dt}} = \pi\left({L(k)}\right)^{{2}}h^{{2}}\dfrac{{dh}}{{dt}}$. Then $\dfrac{{dh}}{{dt}} = {L(val)}$."),
        [(text_choice(f"${L(dV / (pi * (k * h0)**2 * h0 / 3))}$ feet per minute"), r"This divides by the volume instead of by $\dfrac{dV}{dh}$."),
         (text_choice(f"${L(dV / (pi * (k * h0)**2))}$ feet per minute"), r"This holds $r$ fixed; $r$ changes with $h$, so $\dfrac{dV}{dh} = \pi r^{2}$ times the product of three factors."),
         (text_choice(f"${L(3 * val)}$ feet per minute"), r"The $\dfrac{1}{3}$ and the $3$ from the power rule cancel; keeping both changes the answer.")])

def t45_shadow(r):
    H, hman, w = r.choice([(15, 6, 5), (12, 4, 3), (16, 6, 5), (18, 6, 4)])
    # tip of shadow s: s/H = (s - x)/hman -> s = H x / (H - hman); ds/dt = H/(H-hman) w; shadow length (s-x): hman/(H-hman) w
    tip = Rational(H, H - hman) * w; length = Rational(hman, H - hman) * w
    q = rf"A person ${hman}$ feet tall walks away from a ${H}$-foot lamppost at ${w}$ feet per second. How fast is the length of the person's shadow growing?"
    return item("4.5", q, (text_choice(f"${L(length)}$ feet per second"), rf"Similar triangles give $\dfrac{{s}}{{{hman}}} = \dfrac{{x + s}}{{{H}}}$, so $s = {L(Rational(hman, H - hman))}x$ and $\dfrac{{ds}}{{dt}} = {L(length)}$."),
        [(text_choice(f"${L(tip)}$ feet per second"), r"That is how fast the tip of the shadow moves, not how fast the shadow lengthens."),
         (text_choice(f"${w}$ feet per second"), r"That is the walking speed."),
         (text_choice(f"${L(Rational(hman * w, H))}$ feet per second"), r"The similar triangles are set up with the wrong sides.")])
t45_shadow.max = 1

# ---------------------------------------------------------------- 4.6 linearization
def t46_sqrt(r):
    a, d = r.choice([(4, Rational(1, 10)), (9, Rational(1, 5)), (16, Rational(1, 2)), (25, -Rational(1, 2)), (9, -Rational(1, 10))])
    val = sqrt(a) + d / (2 * sqrt(a))
    q = rf"Using the line tangent to $f(x) = \sqrt{{x}}$ at $x = {a}$, what is the approximation of $\sqrt{{{float(a + d)}}}$?" 
    return item("4.6", q, (num(val, 3) if val.q > 100 else num(val, 3), rf"$L(x) = {int(sqrt(a))} + \dfrac{{1}}{{{2 * int(sqrt(a))}}}(x - {a})$; at $x = {float(a + d)}$ this is about {float(val):.3f}."),
        [(num(sqrt(a) + d, 3), r"The slope of the tangent line is $\dfrac{1}{2\sqrt{a}}$, not $1$."),
         (num(sqrt(a) + d / sqrt(a), 3), r"The derivative of $\sqrt{x}$ has a $2$ in its denominator."),
         (num(sqrt(a) - d / (2 * sqrt(a)), 3), r"The sign of $x - a$ is reversed.")])

def t46_table(r):
    a = r.choice([2, 3]); fa = r.choice([5, -1, 7]); fpa = r.choice([3, -2, 4]); d = r.choice([Rational(1, 10), Rational(-1, 5), Rational(1, 5)])
    val = fa + fpa * d
    q = rf"A differentiable function $f$ has $f({a}) = {fa}$ and $f'({a}) = {fpa}$. Using the tangent line at $x = {a}$, what is the approximation of $f({float(a + d)})$?"
    return item("4.6", q, (num(val, 1), rf"$f({float(a + d)}) \approx f({a}) + f'({a})({float(d)}) = {fa} + ({fpa})({float(d)}) = {float(val)}$."),
        [(num(fpa + fa * d, 1), r"The roles of $f(a)$ and $f'(a)$ are swapped."),
         (num(fa - fpa * d, 1), r"The sign of $x - a$ is reversed."),
         (num(fa + fpa * (a + d), 1), r"This multiplies the slope by $x$ instead of by $x - a$.")])

# ---------------------------------------------------------------- 4.7 L'Hospital
DER = {"sin": r"\cos", "tan": r"\sec^{2}"}

def t47_trig(r):
    a, b = r.choice([(4, 5), (3, 2), (5, 2), (4, 3), (1, 4)])
    fn = r.choice(["sin", "tan"])
    val = Rational(a, b)
    q = rf"What is $\displaystyle\lim_{{x \to 0}} \frac{{\{fn}({a}x)}}{{{b}x}}$?" if a != 1 else rf"What is $\displaystyle\lim_{{x \to 0}} \frac{{\{fn} x}}{{{b}x}}$?"
    return item("4.7", q, (num(val), rf"Both parts go to $0$. By L'Hospital's Rule the limit is $\displaystyle\lim_{{x \to 0}}\dfrac{{{a}{DER[fn]}({a}x)}}{{{b}}} = \dfrac{{{a}}}{{{b}}}$."),
        [(num(Rational(b, a)), r"The ratio is upside down."),
         ("0", r"A $\dfrac{0}{0}$ form is indeterminate; its limit is not automatically $0$."),
         (num(Rational(1, b)) if a != 1 else text_choice("The limit does not exist."), r"This leaves out the factor from the inside of the trig function." if a != 1 else r"L'Hospital's Rule gives a finite value.")])

def t47_exp(r):
    k = r.choice([2, 3, 4]); c = r.choice([1, 2])
    val = Rational(k, c)
    q = rf"What is $\displaystyle\lim_{{x \to 0}} \frac{{e^{{{k}x}} - 1}}{{{c}x}}$?" if c != 1 else rf"What is $\displaystyle\lim_{{x \to 0}} \frac{{e^{{{k}x}} - 1}}{{x}}$?"
    return item("4.7", q, (num(val), rf"$\dfrac{{0}}{{0}}$ form. L'Hospital: $\displaystyle\lim_{{x \to 0}}\dfrac{{{k}e^{{{k}x}}}}{{{c}}} = {L(val)}$."),
        [(num(Rational(1, c)), r"The derivative of $e^{kx}$ includes the factor $k$."),
         ("0", r"A $\dfrac{0}{0}$ form is indeterminate."),
         (num(Rational(c, k)), r"The ratio is upside down.")])

def t47_poly(r):
    a = r.choice([1, 2, 3]); n = r.choice([2, 3])
    num_e = x**n - a**n; den = x - a
    val = n * a**(n - 1)
    q = rf"What is $\displaystyle\lim_{{x \to {a}}} \frac{{{L(num_e)}}}{{{L(den)}}}$?"
    return item("4.7", q, (num(val), rf"$\dfrac{{0}}{{0}}$ form. L'Hospital: $\displaystyle\lim_{{x \to {a}}} {n}x^{{{n - 1}}} = {val}$." if n > 2 else rf"$\dfrac{{0}}{{0}}$ form. L'Hospital: $\displaystyle\lim_{{x \to {a}}} 2x = {val}$."),
        [("0", r"A $\dfrac{0}{0}$ form is indeterminate."),
         (num(a**(n - 1)) if a**(n - 1) != val else num(val + 1), r"The power rule brings down the exponent as a factor."),
         (text_choice("The limit does not exist."), r"The function has a removable gap at this point, so the limit exists.")])

def t47_inf(r):
    a, b = r.choice([(3, 2), (2, 5), (4, 1), (6, 4)])
    val = Rational(a, b)
    q = rf"What is $\displaystyle\lim_{{x \to \infty}} \frac{{{a}x^{{2}} + x}}{{{b}x^{{2}} - 7}}$?"
    return item("4.7", q, (num(val), rf"$\dfrac{{\infty}}{{\infty}}$ form. Two uses of L'Hospital give $\dfrac{{{2 * a}}}{{{2 * b}}} = {L(val)}$."),
        [(r"\infty", r"Top and bottom grow at the same rate."),
         ("0", r"The degrees are equal, so the limit is the ratio of leading coefficients."),
         (num(Rational(1, 1)) if val != 1 else num(Rational(b, a) + 1), r"$\dfrac{\infty}{\infty}$ is not $1$; it is indeterminate.")])

def t47_ln(r):
    a = r.choice([1, 2, 3])
    q = rf"What is $\displaystyle\lim_{{x \to 1}} \frac{{\ln x}}{{x^{{{a + 1}}} - 1}}$?" if a else ""
    val = Rational(1, a + 1)
    return item("4.7", q, (num(val), rf"$\dfrac{{0}}{{0}}$ form. L'Hospital: $\displaystyle\lim_{{x \to 1}}\dfrac{{1/x}}{{{a + 1}x^{{{a}}}}} = {L(val)}$." if a > 1 else rf"$\dfrac{{0}}{{0}}$ form. L'Hospital: $\displaystyle\lim_{{x \to 1}}\dfrac{{1/x}}{{2x}} = \dfrac{{1}}{{2}}$."),
        [("0", r"A $\dfrac{0}{0}$ form is indeterminate."),
         (num(a + 1), r"The ratio is upside down."),
         ("1", r"The derivative of the bottom contributes a factor.")])

def t47_which(r):
    q = r"For which limit can L'Hospital's Rule be applied directly?"
    return item("4.7", q, (text_choice(r"$\displaystyle\lim_{x \to 0}\frac{\sin x}{x}$"), r"Top and bottom both approach $0$, an indeterminate form."),
        [(text_choice(r"$\displaystyle\lim_{x \to 0}\frac{\cos x}{x}$"), r"The top goes to $1$, so this is not $\dfrac{0}{0}$."),
         (text_choice(r"$\displaystyle\lim_{x \to 1}\frac{x^{2} + 1}{x - 1}$"), r"The top goes to $2$, not $0$."),
         (text_choice(r"$\displaystyle\lim_{x \to 0}\frac{e^{x}}{x + 1}$"), r"This goes to $\dfrac{1}{1}$, which is not indeterminate.")])
t47_which.max = 1

TEMPLATES = {"4.1": [t41_meaning, t41_estimate, t41_units, t41_second], "4.2": [t42_speed, t42_rest, t42_accel_when_v0],
             "4.3": [t43_rate, t43_cost, t43_temp], "4.4": [t44_circle, t44_sphere, t44_square, t44_chain],
             "4.5": [t45_ladder, t45_cone, t45_shadow], "4.6": [t46_sqrt, t46_table],
             "4.7": [t47_trig, t47_exp, t47_poly, t47_inf, t47_ln, t47_which]}

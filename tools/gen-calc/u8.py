"""Unit 8, Applications of Integration. Every key and wrong choice is computed."""
from core import *

y = Symbol("y", real=True)

def distinct(*v):
    if len(set(simplify(sympify(a)) for a in v)) < len(v):
        raise Skip("same")

def I(f, a, b, v=x):
    return integrate(f, (v, a, b))

# ---------------------------------------------------------------- 8.1 average value
def t81_avg(r):
    fn = r.choice([x**2, x**3, 2 * x + 1, sqrt(x), 6 * x**2]); a, b = r.choice([(0, 2), (1, 3), (0, 4), (1, 4)])
    if fn == sqrt(x) and (a, b) != (0, 4): raise Skip("surd")
    tot = I(fn, a, b); avg = tot / (b - a)
    w2 = (fn.subs(x, a) + fn.subs(x, b)) / 2; w3 = (diff(fn, x).subs(x, b) + 0)
    distinct(avg, tot, w2, w3)
    q = rf"What is the average value of $f(x) = {L(fn)}$ on the interval $[{a}, {b}]$?"
    return item("8.1", q, (num(avg), rf"$\dfrac{{1}}{{{b - a}}}\displaystyle\int_{{{a}}}^{{{b}}} {L(fn)}\,dx = \dfrac{{{L(tot)}}}{{{b - a}}} = {L(avg)}$."),
        [(num(tot), r"Divide the integral by the length of the interval."),
         (num(w2), r"Averaging the endpoint values does not give the average value of a curve."),
         (num(w3), r"This is a derivative value, not an average of $f$.")])

def t81_trig(r):
    q = r"What is the average value of $f(x) = \sin x$ on $[0, \pi]$?"
    return item("8.1", q, (r"\frac{2}{\pi}", r"$\dfrac{1}{\pi}\displaystyle\int_0^{\pi}\sin x\,dx = \dfrac{2}{\pi}$."),
        [("2", r"Divide by the length of the interval, $\pi$."),
         ("0", r"$\sin x \ge 0$ on $[0, \pi]$."),
         (r"\frac{1}{2}", r"That is the average of the endpoint and middle values, not the integral average.")])
t81_trig.max = 1

def t81_rate(r):
    a = r.choice([2, 3]); T = r.choice([2, 4])
    v = a * t**2
    avg = I(v.subs(t, x), 0, T) / T
    q = rf"A tank fills at the rate $R(t) = {L(v)}$ liters per minute. What is the average rate over $0 \le t \le {T}$, in liters per minute?"
    distinct(avg, I(v.subs(t, x), 0, T), v.subs(t, T) / 2, v.subs(t, T) / T)
    return item("8.1", q, (num(avg), rf"$\dfrac{{1}}{{{T}}}\displaystyle\int_0^{{{T}}} {L(v)}\,dt = {L(avg)}$."),
        [(num(I(v.subs(t, x), 0, T)), r"That is the total amount; divide by the time."),
         (num(v.subs(t, T) / 2), r"Averaging $R(0)$ and $R(T)$ does not work for a curve."),
         (num(v.subs(t, T) / T), r"That divides the final rate by time, which is not an average of $R$.")])

# ---------------------------------------------------------------- 8.2 motion
def t82_disp(r):
    a = r.choice([1, 2]); b = r.choice([2, 3, 4]); T = r.choice([3, 4, 5])
    v = t**2 - b * t if a == 1 else 2 * t - b
    disp = I(v.subs(t, x), 0, T)
    roots = [s for s in solve(v, t) if 0 < s < T]
    if not roots: raise Skip("no turn")
    pts = [0] + sorted(roots) + [T]
    dist = sum(abs(I(v.subs(t, x), pts[i], pts[i + 1])) for i in range(len(pts) - 1))
    distinct(disp, dist, v.subs(t, T), -disp)
    kind = r.choice(["disp", "dist"])
    q = rf"A particle moves along a line with velocity $v(t) = {L(v)}$. What is its {'displacement' if kind == 'disp' else 'total distance traveled'} over $0 \le t \le {T}$?"
    if kind == "disp":
        return item("8.2", q, (num(disp), rf"Displacement is $\displaystyle\int_0^{{{T}}} v(t)\,dt = {L(disp)}$."),
            [(num(dist), r"That is the total distance, which counts motion in both directions as positive."),
             (num(v.subs(t, T)), r"That is the velocity at the end."),
             (num(-disp), r"Recheck the sign of the antiderivative.")])
    return item("8.2", q, (num(dist), rf"$v$ changes sign at $t = {L(roots[0])}$. Distance is $\displaystyle\int_0^{{{T}}} |v(t)|\,dt = {L(dist)}$."),
        [(num(disp), r"That is the displacement; distance counts backward motion as positive."),
         (num(v.subs(t, T)), r"That is the velocity at the end."),
         (num(abs(I(v.subs(t, x), pts[1], T))), r"This counts only the motion after the particle turns around.")])

def t82_pos(r):
    a = r.choice([2, 3, 4]); x0 = r.choice([1, -2, 5]); T = r.choice([1, 2, 3])
    v = a * t + 1
    pos = x0 + I(v.subs(t, x), 0, T)
    distinct(pos, pos - x0, v.subs(t, T), x0 + v.subs(t, T))
    q = rf"A particle has velocity $v(t) = {L(v)}$ and position $x(0) = {x0}$. What is $x({T})$?"
    return item("8.2", q, (num(pos), rf"$x({T}) = {x0} + \displaystyle\int_0^{{{T}}} ({L(v)})\,dt = {L(pos)}$."),
        [(num(pos - x0), r"Add the starting position."),
         (num(v.subs(t, T)), r"That is the velocity."),
         (num(x0 + v.subs(t, T)), r"Integrate the velocity; do not just add its value.")])

def t82_vel(r):
    a = r.choice([2, 6, -4]); v0 = r.choice([3, -1, 10]); T = r.choice([2, 3])
    acc = a * t
    vT = v0 + I(acc.subs(t, x), 0, T)
    distinct(vT, vT - v0, acc.subs(t, T), v0 + acc.subs(t, T))
    q = rf"A particle has acceleration $a(t) = {L(acc)}$ and initial velocity $v(0) = {v0}$. What is $v({T})$?"
    return item("8.2", q, (num(vT), rf"$v({T}) = {v0} + \displaystyle\int_0^{{{T}}} {L(acc)}\,dt = {L(vT)}$."),
        [(num(vT - v0), r"Add the initial velocity."),
         (num(acc.subs(t, T)), r"That is the acceleration at that time."),
         (num(v0 + acc.subs(t, T)), r"Integrate the acceleration over the time interval.")])

def t82_table(r):
    ts = [0, 2, 5, 6]; vs = [r.choice(range(-4, 12)) for _ in ts]
    ws = [ts[i + 1] - ts[i] for i in range(3)]
    T_ = sum(Rational(ws[i] * (vs[i] + vs[i + 1]), 2) for i in range(3)); Lf = sum(ws[i] * vs[i] for i in range(3)); Rf = sum(ws[i] * vs[i + 1] for i in range(3))
    distinct(T_, Lf, Rf, sum(vs))
    tab = ", ".join(f"$v({a}) = {b}$" for a, b in zip(ts, vs))
    q = rf"A particle's velocity, in meters per second, has {tab}. Using a trapezoidal sum with these three intervals, what is the estimate of $\displaystyle\int_0^6 v(t)\,dt$, the displacement in meters?"
    return item("8.2", q, (num(T_), r"Add width times the average of the endpoint heights for each interval: " + f"${L(T_)}$."),
        [(num(Lf), r"That is the left Riemann sum."),
         (num(Rf), r"That is the right Riemann sum."),
         (num(sum(vs)), r"Each value must be weighted by the widths of the intervals.")])

def t82_meaning(r):
    T = r.choice([3, 5, 10])
    stmt = r.choice([
        (rf"\displaystyle\int_0^{{{T}}} |v(t)|\,dt", f"The total distance the particle travels in the first {T} seconds"),
        (rf"\displaystyle\int_0^{{{T}}} v(t)\,dt", f"The change in the particle's position over the first {T} seconds"),
        (rf"\displaystyle\int_0^{{{T}}} a(t)\,dt", f"The change in the particle's velocity over the first {T} seconds"),
    ])
    others = [f"The total distance the particle travels in the first {T} seconds", f"The change in the particle's position over the first {T} seconds",
              f"The change in the particle's velocity over the first {T} seconds", f"The particle's position at $t = {T}$"]
    q = rf"A particle moves along a line with velocity $v(t)$ and acceleration $a(t)$, both in standard units. What does ${stmt[0]}$ represent?"
    return item("8.2", q, (text_choice(stmt[1] + "."), r"Integrating a rate gives a total change; integrating speed $|v|$ gives distance."),
        [(text_choice(o + "."), r"Match the integrand to the quantity it is the rate of.") for o in others if o != stmt[1]][:3])
t82_meaning.max = 3

# ---------------------------------------------------------------- 8.3 applied accumulation
def t83_amount(r):
    A0 = r.choice([50, 100, 200]); a = r.choice([2, 3, 6]); T = r.choice([2, 3])
    R = a * t**2
    amt = A0 + I(R.subs(t, x), 0, T)
    distinct(amt, amt - A0, A0 + R.subs(t, T), R.subs(t, T))
    q = rf"A tank holds ${A0}$ gallons at $t = 0$. Water flows in at $R(t) = {L(R)}$ gallons per hour. How many gallons are in the tank at $t = {T}$?"
    return item("8.3", q, (num(amt), rf"${A0} + \displaystyle\int_0^{{{T}}} {L(R)}\,dt = {L(amt)}$."),
        [(num(amt - A0), r"Add the starting amount."),
         (num(A0 + R.subs(t, T)), r"Integrate the rate; do not just add its value."),
         (num(R.subs(t, T)), r"That is the rate at that time.")])

def t83_inout(r):
    a = r.choice([10, 12, 20]); b = r.choice([2, 4]); T = r.choice([2, 3])
    inn = a + 0 * t; out = b * t
    net = I((inn - out).subs(t, x), 0, T)
    distinct(net, I(inn.subs(t, x), 0, T), (inn - out).subs(t, T), I((inn + out).subs(t, x), 0, T))
    q = rf"Sand is added to a pile at ${a}$ tons per hour and removed at $D(t) = {L(out)}$ tons per hour. By how many tons does the pile change over $0 \le t \le {T}$?"
    return item("8.3", q, (num(net), rf"Net change is $\displaystyle\int_0^{{{T}}} \left({a} - {L(out)}\right)dt = {L(net)}$."),
        [(num(I(inn.subs(t, x), 0, T)), r"Subtract the amount removed."),
         (num((inn - out).subs(t, T)), r"That is the net rate at the end, not the change."),
         (num(I((inn + out).subs(t, x), 0, T)), r"Removed sand is subtracted, not added.")])

def t83_units(r):
    q = r"The rate at which people enter a park is $E(t)$ people per hour, with $t$ in hours. What are the units of $\displaystyle\int_2^5 E(t)\,dt$?"
    return item("8.3", q, (text_choice("people"), r"Rate times time: people per hour times hours gives people."),
        [(text_choice("people per hour"), r"Those are the units of $E(t)$, not of its integral."),
         (text_choice("people per hour per hour"), r"Those are the units of $E'(t)$."),
         (text_choice("hours"), r"Integrating with respect to $t$ multiplies by hours.")])
t83_units.max = 1

def t83_max(r):
    a = r.choice([6, 8, 12]); b = r.choice([2, 3, 4])
    q = rf"Water enters a tank at ${a}$ gallons per hour and leaves at $L(t) = {b}t$ gallons per hour, for $0 \le t \le 10$. At what time is the amount of water in the tank greatest?"
    tm = Rational(a, b)
    return item("8.3", q, (text_choice(f"$t = {L(tm)}$"), rf"The amount increases while ${a} > {b}t$ and decreases after, so the maximum is at $t = {L(tm)}$."),
        [(text_choice("$t = 10$"), r"After the outflow passes the inflow, the amount goes down."),
         (text_choice("$t = 0$"), r"At first more water enters than leaves."),
         (text_choice(f"$t = {L(2 * tm)}$"), r"That is when the total in equals the total out from the start, not when the amount is greatest.")])

# ---------------------------------------------------------------- 8.4 area between curves (x)
def t84_area(r):
    a = r.choice([1, 2, 3, 4])
    f = a * x; g = x**2
    area = I(f - g, 0, a)
    distinct(area, I(g - f, 0, a), I(f, 0, a), I(f + g, 0, a))
    q = rf"What is the area of the region enclosed by $y = {L(f)}$ and $y = x^{{2}}$?"
    return item("8.4", q, (num(area), rf"They meet at $x = 0$ and $x = {a}$, and the line is on top: $\displaystyle\int_0^{{{a}}} \left({L(f)} - x^{{2}}\right)dx = {L(area)}$."),
        [(num(I(g - f, 0, a)), r"Top minus bottom; this has them reversed."),
         (num(I(f, 0, a)), r"This is only the area under the line."),
         (num(I(f + g, 0, a)), r"Subtract the lower curve, do not add it.")])

def t84_two(r):
    c = r.choice([1, 4, 9]); s = int(sqrt(c))
    f = c - x**2
    area = I(f, -s, s)
    distinct(area, I(f, 0, s), 2 * area, c * 2 * s)
    q = rf"What is the area of the region bounded by $y = {L(f)}$ and the $x$-axis?"
    return item("8.4", q, (num(area), rf"The curve meets the axis at $x = \pm {s}$: $\displaystyle\int_{{-{s}}}^{{{s}}} \left({L(f)}\right)dx = {L(area)}$."),
        [(num(I(f, 0, s)), r"That is only the right half."),
         (num(2 * area), r"The region is counted twice."),
         (num(c * 2 * s), r"That is the rectangle around the region.")])

def t84_setup(r):
    q = r"Which integral gives the area of the region between $y = e^{x}$ and $y = x$ from $x = 0$ to $x = 1$?"
    return item("8.4", q, (r"\int_0^1 \left(e^{x} - x\right)dx", r"$e^{x} > x$ on this interval, so it is on top."),
        [(r"\int_0^1 \left(x - e^{x}\right)dx", r"Top minus bottom; this is negative."),
         (r"\int_0^1 \left(e^{x} + x\right)dx", r"Subtract the lower curve."),
         (r"\int_0^e \left(e^{x} - x\right)dx", r"The limits are the given $x$-values $0$ and $1$.")])
t84_setup.max = 1

def t84_lines(r):
    a, b = r.choice([(2, 1), (3, 1), (4, 2)])
    # y = a x and y = b x on [0, c]
    c = r.choice([2, 3])
    area = I((a - b) * x, 0, c)
    distinct(area, I(a * x, 0, c), I((a + b) * x, 0, c), (a - b) * c)
    q = rf"What is the area between $y = {a}x$ and $y = {b if b > 1 else ''}x$ from $x = 0$ to $x = {c}$?"
    return item("8.4", q, (num(area), rf"$\displaystyle\int_0^{{{c}}} \left({a}x - {b if b > 1 else ''}x\right)dx = {L(area)}$."),
        [(num(I(a * x, 0, c)), r"Subtract the lower line."),
         (num(I((a + b) * x, 0, c)), r"Subtract, do not add."),
         (num((a - b) * c), r"That is the gap at the right end, not the area.")])

def t84_sqrt(r):
    q = r"What is the area of the region between $y = \sqrt{x}$ and $y = x$?"
    return item("8.4", q, (r"\frac{1}{6}", r"They meet at $0$ and $1$, with $\sqrt{x}$ on top: $\dfrac{2}{3} - \dfrac{1}{2} = \dfrac{1}{6}$."),
        [(r"-\frac{1}{6}", r"An area is positive; top minus bottom."),
         (r"\frac{2}{3}", r"That is the area under $\sqrt{x}$ alone."),
         (r"\frac{7}{6}", r"Subtract the lower curve, do not add it.")])
t84_sqrt.max = 1

# ---------------------------------------------------------------- 8.5 area (y)
def t85(r):
    a = r.choice([1, 4, 9]); s = int(sqrt(a))
    q = rf"The region is bounded by $x = y^{{2}}$ and $x = {a}$. Which integral in $y$ gives its area?"
    return item("8.5", q, (rf"\int_{{-{s}}}^{{{s}}} \left({a} - y^{{2}}\right)dy", rf"Right minus left, from $y = -{s}$ to $y = {s}$."),
        [(rf"\int_{{0}}^{{{s}}} \left({a} - y^{{2}}\right)dy", r"The region extends below the $x$-axis too."),
         (rf"\int_{{-{s}}}^{{{s}}} \left(y^{{2}} - {a}\right)dy", r"Right minus left; this is reversed."),
         (rf"\int_{{0}}^{{{a}}} \left({a} - y^{{2}}\right)dy", r"The limits are $y$-values where the curves meet.")])

def t85_val(r):
    a = r.choice([1, 2, 3])
    area = I(a * y - y**2, 0, a, y)
    q = rf"What is the area of the region between $x = y^{{2}}$ and $x = {a if a > 1 else ''}y$?"
    return item("8.5", q, (num(area), rf"They meet at $y = 0$ and $y = {a}$; ${a if a > 1 else ''}y$ is to the right. $\displaystyle\int_0^{{{a}}} \left({a if a > 1 else ''}y - y^{{2}}\right)dy = {L(area)}$."),
        [(num(-area), r"Right minus left."),
         (num(I(a * y, 0, a, y)), r"Subtract the curve on the left."),
         (num(I(a * y + y**2, 0, a, y)), r"Subtract, do not add.")])

# ---------------------------------------------------------------- 8.6 more than two intersections
def t86(r):
    a = r.choice([1, 2])
    f = x**3; g = a**2 * x
    area = 2 * I(g - f, 0, a)
    q = rf"What is the total area enclosed by $y = x^{{3}}$ and $y = {a**2 if a > 1 else ''}x$?"
    return item("8.6", q, (num(area), rf"They meet at $x = -{a}, 0, {a}$. The curves switch at $0$, so add $\displaystyle\int_{{-{a}}}^{{0}} (x^{{3}} - {a**2 if a > 1 else ''}x)\,dx$ and $\displaystyle\int_0^{{{a}}} ({a**2 if a > 1 else ''}x - x^{{3}})\,dx$: ${L(area)}$."),
        [("0", r"The two pieces cancel only if signs are ignored; area counts both as positive."),
         (num(area / 2), r"That is only one of the two pieces."),
         (num(2 * area), r"Each piece is counted twice.")])

def t86_setup(r):
    q = r"The curves $y = f(x)$ and $y = g(x)$ meet at $x = 0$, $2$, and $5$, with $f \ge g$ on $[0, 2]$ and $g \ge f$ on $[2, 5]$. Which gives the total area between them on $[0, 5]$?"
    return item("8.6", q, (r"\int_0^2 (f - g)\,dx + \int_2^5 (g - f)\,dx", r"Split where the curves cross and subtract bottom from top on each piece."),
        [(r"\int_0^5 (f - g)\,dx", r"On $[2, 5]$ this counts area as negative."),
         (r"\int_0^2 (f - g)\,dx - \int_2^5 (g - f)\,dx", r"The second piece is already positive; subtracting it removes area."),
         (r"\left|\int_0^5 (f - g)\,dx\right|", r"The absolute value of the total is not the sum of the areas.")])
t86_setup.max = 1

def t86_sin(r):
    q = r"What is the total area between $y = \sin x$ and the $x$-axis on $[0, 2\pi]$?"
    return item("8.6", q, ("4", r"Each arch has area $2$; there are two."),
        [("0", r"That is the signed integral, where the arches cancel."),
         ("2", r"That is one arch."),
         (r"2\pi", r"That is the length of the interval.")])
t86_sin.max = 1

# ---------------------------------------------------------------- 8.7 and 8.8 cross sections
def t87_sq(r):
    a = r.choice([1, 2, 4])
    # base: region under y = sqrt(x) ... use y = a - x^2? choose base between y = x and y = 0? Use y = sqrt(x) on [0, a]: side = sqrt(x), area = x
    V = I(x, 0, a)
    q = rf"The base of a solid is the region under $y = \sqrt{{x}}$ from $x = 0$ to $x = {a}$. Cross sections perpendicular to the $x$-axis are squares. What is the volume?"
    return item("8.7", q, (num(V), rf"Each square has side $\sqrt{{x}}$ and area $x$: $\displaystyle\int_0^{{{a}}} x\,dx = {L(V)}$."),
        [(num(pi * V), r"That is the volume of revolution, not squares."),
         (num(I(sqrt(x), 0, a)), r"Integrate the area of each square, not its side."),
         (num(2 * V), r"The area of a square is side squared.")])

def t87_rect(r):
    a = r.choice([1, 2]); h = r.choice([2, 3])
    side = 2 * (a**2 - x**2) if False else a - x
    V = I(h * (a - x), 0, a)
    q = rf"The base of a solid is the triangle with vertices $(0, 0)$, $({a}, 0)$, and $(0, {a})$. Cross sections perpendicular to the $x$-axis are rectangles of height ${h}$. What is the volume?"
    return item("8.7", q, (num(V), rf"The base at $x$ has length ${a} - x$, so the area is ${h}({a} - x)$: $\displaystyle\int_0^{{{a}}} {h}({a} - x)\,dx = {L(V)}$."),
        [(num(I((a - x)**2, 0, a)), r"That treats the sections as squares."),
         (num(I(a - x, 0, a)), r"Multiply each base by the height."),
         (num(h * a**2), r"That is a box, not the region over the triangle.")])

def t88(r):
    a = r.choice([1, 2, 3])
    kind = r.choice(["semi", "tri"])
    # base under y = a - x on [0, a]
    if kind == "semi":
        V = I(pi / 8 * (a - x)**2, 0, a)
        q = rf"The base of a solid is the triangle with vertices $(0, 0)$, $({a}, 0)$, and $(0, {a})$. Cross sections perpendicular to the $x$-axis are semicircles with diameters in the base. What is the volume?"
        return item("8.8", q, (L(V), rf"A semicircle with diameter $s = {a} - x$ has area $\dfrac{{\pi}}{{8}}s^{{2}}$. $\displaystyle\int_0^{{{a}}} \dfrac{{\pi}}{{8}}({a} - x)^{{2}}dx = {L(V)}$."),
            [(L(4 * V), r"$s$ is the diameter, so the radius is $\dfrac{s}{2}$."),
             (L(2 * V), r"A semicircle is half a circle."),
             (L(8 * V / pi), r"The factor $\dfrac{\pi}{8}$ is missing.")])
    V = I(sqrt(3) / 4 * (a - x)**2, 0, a)
    q = rf"The base of a solid is the triangle with vertices $(0, 0)$, $({a}, 0)$, and $(0, {a})$. Cross sections perpendicular to the $x$-axis are equilateral triangles. What is the volume?"
    return item("8.8", q, (L(V), rf"An equilateral triangle with side $s$ has area $\dfrac{{\sqrt{{3}}}}{{4}}s^{{2}}$, and $s = {a} - x$. The integral is ${L(V)}$."),
        [(L(V * 4 / sqrt(3)), r"That uses squares."),
         (L(V * 2 / sqrt(3)), r"That uses right isosceles triangles with legs $s$."),
         (L(2 * V), r"The area of an equilateral triangle is $\dfrac{\sqrt{3}}{4}s^{2}$.")])

# ---------------------------------------------------------------- 8.9 to 8.12 revolution
def t89(r):
    a = r.choice([1, 2, 4]); fn = r.choice([sqrt(x), x])
    V = pi * I(fn**2, 0, a)
    q = rf"The region under $y = {L(fn)}$ from $x = 0$ to $x = {a}$ is revolved about the $x$-axis. What is the volume?"
    return item("8.9", q, (L(V), rf"Discs: $\pi\displaystyle\int_0^{{{a}}} \left({L(fn)}\right)^{{2}}dx = {L(V)}$."),
        [(L(pi * I(fn, 0, a)), r"The radius is squared."),
         (L(V / pi), r"The factor $\pi$ is missing."),
         (L(2 * pi * I(fn, 0, a)), r"That uses the circumference instead of the area of a disc.")])

def t810(r):
    a = r.choice([1, 2, 3]); line = r.choice(["y", "x"])
    if line == "y":
        # region under y = a (horizontal line) above y = x^2? revolve region between y=x^2, y=a^2 about y = a^2? Use: region between y = x^2 and y = 4 revolve about y = 4 -> radius 4 - x^2
        c = a**2
        V = pi * I((c - x**2)**2, -a, a)
        q = rf"The region between $y = x^{{2}}$ and $y = {c}$ is revolved about the line $y = {c}$. What is the volume?"
        return item("8.10", q, (L(V), rf"Discs with radius ${c} - x^{{2}}$: $\pi\displaystyle\int_{{-{a}}}^{{{a}}} \left({c} - x^{{2}}\right)^{{2}}dx = {L(V)}$."),
            [(L(pi * I(c**2 - x**4, -a, a)), r"That is a washer about the $x$-axis."),
             (L(pi * I((c - x**2)**2, 0, a)), r"That covers only half the region."),
             (L(pi * I(c - x**2, -a, a)), r"The radius is squared.")])
    V = pi * I(y**2, 0, a, y) if False else pi * I(y**4, 0, a, y)
    q = rf"The region bounded by $y = \sqrt{{x}}$, the $y$-axis, and $y = {a}$ is revolved about the $y$-axis. What is the volume?"
    return item("8.10", q, (L(V), rf"In terms of $y$, the radius is $x = y^{{2}}$: $\pi\displaystyle\int_0^{{{a}}} y^{{4}}\,dy = {L(V)}$."),
        [(L(pi * I(y**2, 0, a, y)), r"The radius $y^{2}$ is squared."),
         (L(pi * I(x, 0, a**2)), r"That revolves the region under the curve about the $x$-axis."),
         (L(V / pi), r"The factor $\pi$ is missing.")])

def t811(r):
    a = r.choice([1, 2])
    # between y = x and y = x^2 on [0,1] scaled: y = a x, y = x^2 on [0, a]
    V = pi * I((a * x)**2 - x**4, 0, a)
    q = rf"The region between $y = {a if a > 1 else ''}x$ and $y = x^{{2}}$ is revolved about the $x$-axis. What is the volume?"
    return item("8.11", q, (L(V), rf"Washers: outer radius ${a if a > 1 else ''}x$, inner radius $x^{{2}}$. $\pi\displaystyle\int_0^{{{a}}} \left({L((a * x)**2)} - x^{{4}}\right)dx = {L(V)}$."),
        [(L(pi * I((a * x - x**2)**2, 0, a)), r"Square each radius, then subtract; do not square the difference."),
         (L(pi * I(a * x - x**2, 0, a)), r"The radii must be squared."),
         (L(V / pi), r"The factor $\pi$ is missing.")])

def t811b(r):
    c = r.choice([1, 4]); s_ = int(sqrt(c))
    V = pi * I(c**2 - x**4, -s_, s_)
    q = rf"The region between $y = x^{{2}}$ and $y = {c}$ is revolved about the $x$-axis. What is the volume?"
    return item("8.11", q, (L(V), rf"Washers: outer radius ${c}$, inner radius $x^{{2}}$, from $x = -{s_}$ to ${s_}$: $\pi\displaystyle\int_{{-{s_}}}^{{{s_}}} \left({c**2} - x^{{4}}\right)dx = {L(V)}$."),
        [(L(pi * I((c - x**2)**2, -s_, s_)), r"Square each radius, then subtract; do not square the difference."),
         (L(pi * I(c**2 - x**4, 0, s_)), r"The region runs from $x = -\sqrt{c}$ to $\sqrt{c}$."),
         (L(pi * I(c - x**2, -s_, s_)), r"The radii must be squared.")])

def t812(r):
    k = r.choice([1, 2, 3])
    # region between y = x and y = x^2 revolved about y = -k: outer k + x, inner k + x^2
    V = pi * I((k + x)**2 - (k + x**2)**2, 0, 1)
    q = rf"The region between $y = x$ and $y = x^{{2}}$ is revolved about the line $y = -{k}$. What is the volume?"
    return item("8.12", q, (L(V), rf"Outer radius $x + {k}$, inner radius $x^{{2}} + {k}$: $\pi\displaystyle\int_0^1 \left[(x + {k})^{{2}} - (x^{{2}} + {k})^{{2}}\right]dx = {L(V)}$."),
        [(L(pi * I(x**2 - x**4, 0, 1)), r"That revolves about the $x$-axis."),
         (L(pi * I((k - x**2)**2 - (k - x)**2, 0, 1)), rf"That revolves about $y = {k}$, above the region, instead of $y = -{k}$."),
         (L(pi * I((x - x**2)**2, 0, 1)), r"Square each radius before subtracting.")])

TEMPLATES = {"8.1": [t81_avg, t81_rate, t81_trig], "8.2": [t82_disp, t82_pos, t82_vel, t82_table, t82_meaning], "8.3": [t83_amount, t83_inout, t83_units, t83_max],
             "8.4": [t84_area, t84_two, t84_lines, t84_setup, t84_sqrt], "8.5": [t85, t85_val], "8.6": [t86, t86_setup, t86_sin],
             "8.7": [t87_sq, t87_rect], "8.8": [t88], "8.9": [t89], "8.10": [t810], "8.11": [t811, t811b], "8.12": [t812]}

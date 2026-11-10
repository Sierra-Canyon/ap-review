"""Unit 7, Differential Equations. Every key and wrong choice is computed; every item carries a difficulty."""
import sys, inspect, re
import core
from core import *
from sympy import cbrt

y = Symbol("y", real=True)

def co(v):
    return "" if v == 1 else L(v)

def distinct(*v):
    if len(set(simplify(sympify(a)) for a in v)) < len(v):
        raise Skip("same")

def it(diff, *a, **k):
    """core.item plus a difficulty ("easy", "moderate", "difficult"), judged the way Albert labels its own."""
    d = item(*a, **k)
    d["difficulty"] = diff
    return d

# core.write_deck does not write difficulty. When it does not, write the file with core's writer and then add each
# item's difficulty after its calc field. Units that set no difficulty are left as they were.
_core_write = core.write_deck
def _write_with_difficulty(path, header, sets_js, items, unit, prefix):
    _core_write(path, header, sets_js, items, unit, prefix)
    if not any(i.get("difficulty") for i in items):
        return
    src = open(path).read()
    for n, i in enumerate(items, 1):
        if i.get("difficulty"):
            src, c = re.subn(r'(\{ id: "' + re.escape(f"{prefix}-{n:03d}") + r'", [^\n]*?calc: (?:true|false))', r'\1, difficulty: "' + i["difficulty"] + '"', src, count=1)
            if c != 1:
                raise RuntimeError("difficulty not written for " + f"{prefix}-{n:03d}")
    open(path, "w").write(src)
if "difficulty" not in inspect.getsource(_core_write):
    core.write_deck = _write_with_difficulty
    _main = sys.modules.get("__main__")
    if getattr(_main, "write_deck", None) is _core_write:
        _main.write_deck = _write_with_difficulty

# ---------------------------------------------------------------- 7.1 modeling
def t71_prop(r):
    kind = r.choice([
        ("easy", "The rate of change of a population $P$ with respect to time $t$ is proportional to $P$.", r"\frac{dP}{dt} = kP",
         r"The rate of change of $P$ is $\dfrac{dP}{dt}$, and proportional to $P$ means a constant times $P$.",
         [(r"\frac{dP}{dt} = kPt", r"This makes the rate depend on the time as well. The rate is proportional to $P$ alone."),
          (r"\frac{dP}{dt} = kP^{2}", r"This is proportional to the square of $P$, not to $P$."),
          (r"\frac{dP}{dt} = P + k", r"This adds the constant to $P$. Proportional to $P$ means a constant times $P$.")]),
        ("moderate", "The rate at which the temperature $T$ of an object changes is proportional to the difference between $T$ and the room temperature, $70$ degrees.", r"\frac{dT}{dt} = k(T - 70)",
         r"The rate of change of $T$ is $\dfrac{dT}{dt}$, and it equals a constant times the difference $T - 70$.",
         [(r"\frac{dT}{dt} = kT - 70", r"Here only $T$ is multiplied by $k$. The whole difference $T - 70$ must be multiplied by $k$."),
          (r"T = k(t - 70)", r"This gives $T$ itself, not its rate of change, and it uses the time $t$ instead of the temperature $T$."),
          (r"\frac{dT}{dt} = k(t - 70)", r"This uses the time $t$ in place of the temperature $T$.")]),
        ("easy", "The rate of change of $y$ with respect to $x$ is proportional to the square root of $y$.", r"\frac{dy}{dx} = k\sqrt{y}",
         r"The rate of change of $y$ with respect to $x$ is $\dfrac{dy}{dx}$, and it equals a constant times $\sqrt{y}$.",
         [(r"\frac{dy}{dx} = \sqrt{ky}", r"The constant multiplies $\sqrt{y}$; it does not go under the root."),
          (r"\frac{dy}{dx} = k\sqrt{x}", r"The rate depends on $y$, not on $x$."),
          (r"y = k\sqrt{x}", r"This gives $y$ itself, not its rate of change, and it uses $x$ instead of $y$.")]),
        ("moderate", "The rate of change of $y$ with respect to $x$ is inversely proportional to $y$.", r"\frac{dy}{dx} = \frac{k}{y}",
         r"Inversely proportional to $y$ means a constant divided by $y$, so $\dfrac{dy}{dx} = \dfrac{k}{y}$.",
         [(r"\frac{dy}{dx} = ky", r"This is directly proportional to $y$. Inversely proportional means a constant divided by $y$."),
          (r"\frac{dy}{dx} = \frac{k}{x}", r"The rate depends on $y$, not on $x$."),
          (r"y = \frac{k}{x}", r"This gives $y$ itself, not its rate of change, and it uses $x$ instead of $y$.")]),
    ])
    q = rf"{kind[1]} Which differential equation models this, where $k$ is a constant?"
    return it(kind[0], "7.1", q, (kind[2], kind[3]), kind[4])
t71_prop.max = 3

# ---------------------------------------------------------------- 7.2 verifying solutions
def t72_verify(r):
    k = r.choice([-2, 4, 5])
    h = Rational(k, 2); hs = "-" if h == -1 else co(h)
    q = rf"Which function is a solution of the differential equation $\dfrac{{dy}}{{dx}} = {k}y$?"
    return it("easy", "7.2", q, (rf"y = 5e^{{{k}x}}", rf"Then $\dfrac{{dy}}{{dx}} = {5 * k}e^{{{k}x}} = {k}\left(5e^{{{k}x}}\right) = {k}y$."),
        [(rf"y = e^{{{k}x}} + 5", rf"Its derivative is ${k}e^{{{k}x}}$, but ${k}y = {k}e^{{{k}x}} {pm(5 * k)}$. A constant added to the exponential does not carry through."),
         (rf"y = 5e^{{{L(Rational(1, k))}x}}", rf"Its derivative is ${L(Rational(1, k))}y$. The coefficient in the exponent must be ${k}$, the constant in the equation."),
         (rf"y = 5e^{{{hs}x^{{2}}}}", rf"Its derivative is ${k}xy$, so it solves $\dfrac{{dy}}{{dx}} = {k}xy$, not $\dfrac{{dy}}{{dx}} = {k}y$.")])
t72_verify.max = 1

def t72_sec(r):
    a = r.choice([2, 3, 5])
    q = rf"Which function is a solution of the differential equation $\dfrac{{dy}}{{dx}} = y\tan x$ for $-\dfrac{{\pi}}{{2}} < x < \dfrac{{\pi}}{{2}}$?"
    return it("moderate", "7.2", q, (rf"y = {a}\sec x", rf"$\dfrac{{dy}}{{dx}} = {a}\sec x\tan x$, and $y\tan x = {a}\sec x\tan x$. The two sides are equal."),
        [(rf"y = -{a}\cos x", rf"$\dfrac{{dy}}{{dx}} = {a}\sin x$, but $y\tan x = -{a}\cos x\tan x = -{a}\sin x$. The signs differ."),
         (rf"y = {a} + \sec x", rf"$\dfrac{{dy}}{{dx}} = \sec x\tan x$, but $y\tan x = {a}\tan x + \sec x\tan x$. The added constant does not carry through."),
         (rf"y = {a}\sec^{{2}} x", rf"$\dfrac{{dy}}{{dx}} = {2 * a}\sec^{{2}} x\tan x = 2y\tan x$, twice the right side.")])
t72_sec.max = 1

# ---------------------------------------------------------------- 7.3 slope fields (a generated field with two questions)
FIELDS = [  # dy/dx = p x + q y, none used elsewhere on the site
    (1, -2, (-2, 2), (-2, 2)),
    (3, 1, (-2, 2), (-3, 3)),
    (-3, 1, (-2, 2), (-3, 3)),
]
def t73_field(r):
    p, q, xr, yr = r.choice(FIELDS)
    rhs = p * x + q * y
    def slope(e, a, b): return e.subs({x: a, y: b})
    sid = "c7x-g1"
    js = f"{p} * x + {q} * y".replace("+ -", "- ").replace("1 * ", "").replace("-1 * ", "-")
    m0 = Rational(-p, q)
    zeros = [(a, m0 * a) for a in range(xr[0], xr[1] + 1) if (m0 * a).is_integer and yr[0] <= m0 * a <= yr[1]]
    zs = ", ".join(f"({a}, {int(b)})" for a, b in zeros)
    alt = (f"Slope field on the grid from x = {xr[0]} to {xr[1]} and y = {yr[0]} to {yr[1]}. The segments are horizontal at the points {zs}, which lie on one line through the origin. "
           f"The segment at (1, 0) has slope {slope(rhs, 1, 0)} and the segment at (0, 1) has slope {slope(rhs, 0, 1)}. Along any line parallel to the horizontal segments' line, all segments have the same slope.").replace("-", "−").replace("− ", "- ")
    alt = alt.replace("−", "-")
    # Square units, the window half a unit past the outer points, and tick numbers outside the frame (as in u7.js).
    u = 60 if yr[1] - yr[0] <= 4 else 48
    labs = [[i - (8 if i < 0 else 4) / u, yr[0] - 0.5 - 17 / u, str(i).replace("-", "\u2212")] for i in range(xr[0], xr[1] + 1)]
    labs += [[xr[0] - 0.5 - (22 if j < 0 else 14) / u, j - 4 / u, str(j).replace("-", "\u2212")] for j in range(yr[0], yr[1] + 1)]
    lab_js = "[" + ", ".join(f"[{round(lx, 4)}, {round(ly, 4)}, \"{t}\"]" for lx, ly, t in labs) + "]"
    code = ("{ name: \"A slope field\", label: \"Graph\", intro: String.raw`The slope field for a certain differential equation is shown below.`,\n"
            f"    sources: [{{ title: \"\", blocks: [{{ svg: graph({{ x: [{xr[0] - 0.5}, {xr[1] + 0.5}], y: [{yr[0] - 0.5}, {yr[1] + 0.5}], width: {(xr[1] - xr[0] + 1) * u + 60}, height: {(yr[1] - yr[0] + 1) * u + 60}, labelEvery: 1000,\n"
            f"      labels: {lab_js},\n"
            f"      xname: \"x\", yname: \"y\", field: {{ f: (x, y) => {js}, step: 1 }},\n"
            f"      alt: \"{alt}\" }}) }}] }}] }}")
    # item 1: which differential equation
    swap, neg, flip = q * x + p * y, -p * x - q * y, p * x - q * y
    distinct(rhs, swap, neg, flip)
    def first_diff(e):
        for a, b in [(1, 0), (0, 1), (1, 1), (-1, 1)]:
            if slope(e, a, b) != slope(rhs, a, b):
                return a, b
    def why_wrong(e, what):
        a, b = first_diff(e)
        return rf"{what} At $({a}, {b})$ this equation gives slope ${slope(e, a, b)}$, but the segment drawn there has slope ${slope(rhs, a, b)}$."
    i1 = it("moderate", "7.3", r"The slope field shown is for which of the following differential equations?",
        (rf"\frac{{dy}}{{dx}} = {L(rhs)}", rf"The horizontal segments lie on the line $y = {L(m0 * x)}$, where ${L(rhs)} = 0$. The segment at $(1, 0)$ has slope ${slope(rhs, 1, 0)}$ and the segment at $(0, 1)$ has slope ${slope(rhs, 0, 1)}$, which are the values of ${L(rhs)}$."),
        [(rf"\frac{{dy}}{{dx}} = {L(swap)}", why_wrong(swap, "The coefficients of $x$ and $y$ are swapped.")),
         (rf"\frac{{dy}}{{dx}} = {L(neg)}", why_wrong(neg, rf"This has the same horizontal segments on $y = {L(m0 * x)}$, but every other slope has the opposite sign.")),
         (rf"\frac{{dy}}{{dx}} = {L(flip)}", why_wrong(flip, "The sign of the $y$ term is reversed."))], set_id=sid)
    # item 2: the line of horizontal segments
    ms = [m0, -m0, 1 / m0, -1 / m0]
    distinct(*ms)
    def line(mv): return text_choice(rf"The line $y = {L(mv * x)}$")
    pa, pb = [(a, b) for a, b in zeros if a != 0][-1]
    base = rf"The horizontal segments pass through $(0, 0)$ and $({pa}, {int(pb)})$, so their line has slope ${L(m0)}$."
    i2 = it("easy", "7.3", r"In the slope field shown, the segments are horizontal at every point of which line?",
        (line(ms[0]), rf"The horizontal segments are at {', '.join(f'$({a}, {int(b)})$' for a, b in zeros)}. These points lie on $y = {L(m0 * x)}$."),
        [(line(ms[1]), base + rf" This line has slope ${L(ms[1])}$, the opposite sign."),
         (line(ms[2]), base + rf" This line has slope ${L(ms[2])}$, the reciprocal: the rise and the run are swapped."),
         (line(ms[3]), base + rf" This line has slope ${L(ms[3])}$, the negative reciprocal, so it is perpendicular to the right line.")], set_id=sid)
    return [i1, i2], sid, code

GRAPH_TEMPLATES = {"7.3": t73_field}

# ---------------------------------------------------------------- 7.4 reasoning with slope fields
def t74_which(r):
    q = r"A slope field has slopes that depend only on $y$: every segment in a horizontal row has the same slope. Which differential equation could it show?"
    return it("easy", "7.4", q, (r"\frac{dy}{dx} = y - 1", r"The slope $y - 1$ has no $x$ in it, so all points in a row (the same $y$) have the same slope."),
        [(r"\frac{dy}{dx} = x^{2} - 1", r"The slope $x^{2} - 1$ depends only on $x$, so the segments would match down each column, not across each row."),
         (r"\frac{dy}{dx} = xy - 1", r"The slope $xy - 1$ depends on both variables: in the row $y = 1$ it is $0$ at $x = 1$ and $1$ at $x = 2$."),
         (r"\frac{dy}{dx} = x + y - 1", r"The slope $x + y - 1$ depends on both variables: in the row $y = 0$ it is $0$ at $x = 1$ and $1$ at $x = 2$.")])
t74_which.max = 1

def t74_concav(r):
    q = r"For the differential equation $\dfrac{dy}{dx} = xy$, which expression gives $\dfrac{d^{2}y}{dx^{2}}$ in terms of $x$ and $y$?"
    return it("moderate", "7.4", q, ("y + x^{2}y", r"By the product rule, $\dfrac{d^{2}y}{dx^{2}} = y + x\dfrac{dy}{dx} = y + x(xy) = y + x^{2}y$."),
        [("y", r"This treats $y$ as a constant, so the term $x\dfrac{dy}{dx}$ from the product rule is lost."),
         ("x + y", r"This uses $1$ as the derivative of $y$. The derivative of $y$ is $\dfrac{dy}{dx} = xy$."),
         ("x^{2}y", r"This keeps only $x\dfrac{dy}{dx}$ and drops the term $y$ from differentiating $x$.")])
t74_concav.max = 1

# ---------------------------------------------------------------- 7.6 general solutions
def t76_xy(r):
    k = r.choice([3, 6])
    h = co(Rational(k, 2))
    q = rf"Which is the general solution of $\dfrac{{dy}}{{dx}} = {k}xy$?"
    return it("easy", "7.6", q, (rf"y = Ce^{{{h}x^{{2}}}}", rf"Separate: $\dfrac{{dy}}{{y}} = {k}x\,dx$. Then $\ln|y| = {h}x^{{2}} + C_1$, so $|y| = e^{{C_1}}e^{{{h}x^{{2}}}}$ and $y = Ce^{{{h}x^{{2}}}}$."),
        [(rf"y = e^{{{h}x^{{2}}}} + C", r"The constant was added after exponentiating. $e^{C_1}$ multiplies the exponential; it does not add to it."),
         (rf"y = Ce^{{{k}x}}", rf"This takes ${k}x$ itself as its antiderivative. The antiderivative of ${k}x$ is ${h}x^{{2}}$."),
         (rf"y = {h}x^{{2}}y + C", r"This integrates the right side with $y$ still in it. The variables must be separated first.")])
t76_xy.max = 1

def t76_xy2(r):
    k = r.choice([2, 3, 4])
    q = rf"Which is a general solution of $\dfrac{{dy}}{{dx}} = \dfrac{{{k}x}}{{y}}$?"
    return it("moderate", "7.6", q, (rf"y^{{2}} = {k}x^{{2}} + C", rf"Separate: $y\,dy = {k}x\,dx$, so $\dfrac{{y^{{2}}}}{{2}} = {co(Rational(k, 2))}x^{{2}} + C_1$. Multiplying by $2$ gives $y^{{2}} = {k}x^{{2}} + C$."),
        [(rf"y = {co(Rational(k, 2))}x^{{2}} + C", r"This integrates only the numerator and leaves $y$ on the right. Multiply by $y$ first: $y\,dy = " + f"{k}" + r"x\,dx$."),
         (rf"\ln|y| = {co(Rational(k, 2))}x^{{2}} + C", r"This separates as $\dfrac{dy}{y}$. Since $y$ is in the denominator on the right, it moves to the left as $y\,dy$."),
         (rf"y^{{2}} = {co(Rational(k, 2))}x^{{2}} + C", r"The left side $\dfrac{y^{2}}{2}$ was multiplied by $2$, but the right side was not.")])
t76_xy2.max = 2

def t76_ky(r):
    k = r.choice([2, -3, 4]); ek = L(k)
    q = rf"Which is the general solution of $\dfrac{{dy}}{{dt}} = {L(k)}y$?" if k != -1 else r"Which is the general solution of $\dfrac{dy}{dt} = -y$?"
    return it("easy", "7.6", q, (rf"y = Ce^{{{ek}t}}", rf"Separate and integrate: $\ln|y| = {ek}t + C_1$, so $y = \pm e^{{C_1}}e^{{{ek}t}} = Ce^{{{ek}t}}$."),
        [(rf"y = e^{{{ek}t}} + C", r"The constant was added after exponentiating. It multiplies the exponential."),
         (rf"y = Ce^{{{co(Rational(k, 2))}t^{{2}}}}", rf"This integrates ${L(k)}$ as if it were ${L(k)}t$, so it solves $\dfrac{{dy}}{{dt}} = {L(k)}ty$."),
         (rf"y = Ce^{{{L(Rational(1, 1) / k)}t}}" if k != -1 else r"y = Ce^{t}", rf"The coefficient of $t$ in the exponent must be ${L(k)}$, the constant in the equation." if k != -1 else r"The coefficient of $t$ in the exponent must be $-1$; this solution grows instead of decaying.")])
t76_ky.max = 2

def t76_cos(r):
    a = r.choice([2, 3])
    q = rf"Which is the general solution of $\dfrac{{dy}}{{dx}} = {a}e^{{-y}}\cos x$?"
    return it("difficult", "7.6", q, (rf"y = \ln\left({a}\sin x + C\right)", rf"Separate: $e^{{y}}\,dy = {a}\cos x\,dx$. Then $e^{{y}} = {a}\sin x + C$, so $y = \ln\left({a}\sin x + C\right)$."),
        [(rf"y = \ln\left({a}\sin x\right) + C", r"The constant belongs inside the logarithm: it is added to $e^{y}$ before the logarithm is taken."),
         (rf"y = \ln\left(C - {a}\sin x\right)", rf"This takes the antiderivative of $\cos x$ as $-\sin x$. The antiderivative of ${a}\cos x$ is ${a}\sin x$."),
         (rf"y = -\ln\left(C - {a}\sin x\right)", rf"This separates as $e^{{-y}}\,dy = {a}\cos x\,dx$. Dividing by $e^{{-y}}$ moves it to the left as $e^{{y}}$.")])
t76_cos.max = 1

def t76_ex(r):
    q = r"Which is the general solution of $\dfrac{dy}{dx} = e^{x}y$?"
    return it("moderate", "7.6", q, (r"y = Ce^{e^{x}}", r"Separate: $\dfrac{dy}{y} = e^{x}\,dx$. Then $\ln|y| = e^{x} + C_1$, so $y = Ce^{e^{x}}$."),
        [(r"y = e^{e^{x}} + C", r"The constant was added after exponentiating. It multiplies the exponential."),
         (r"y = e^{x} + C", r"This solves $\dfrac{dy}{dx} = e^{x}$ and ignores the factor $y$."),
         (r"y = Ce^{xe^{x}}", r"This treats $e^{x}$ as a constant when integrating, giving $xe^{x}$. The antiderivative of $e^{x}$ is $e^{x}$.")])
t76_ex.max = 1

# ---------------------------------------------------------------- 7.7 particular solutions
def t77_exp(r):
    k = r.choice([2, 3, -1, Rational(1, 2)]); y0 = r.choice([3, 5, 10]); X = r.choice([1, 2])
    val = y0 * exp(k * X); ek = "-" if k == -1 else L(k)
    tan = y0 + k * y0 * X
    distinct(val, exp(k * X) + y0 - 1, k * val, tan)
    q = rf"If $\dfrac{{dy}}{{dx}} = {L(k) if k != -1 else '-'}y$ and $y(0) = {y0}$, what is $y({X})$?"
    return it("easy", "7.7", q, (L(val), rf"The solution is $y = {y0}e^{{{ek}x}}$, so $y({X}) = {L(val)}$."),
        [(L(exp(k * X) + y0 - 1), rf"This uses $y = e^{{{ek}x}} + C$ with $C = {y0 - 1}$. The constant multiplies the exponential: $y = {y0}e^{{{ek}x}}$."),
         (L(k * val), rf"This is $\dfrac{{dy}}{{dx}}$ at $x = {X}$, which is ${L(k)}y$, not $y$."),
         (L(tan), rf"This follows the tangent line at $x = 0$, whose slope is ${L(k * y0)}$. The slope changes as $y$ changes, so the line does not give $y({X})$.")])
t77_exp.max = 1

def t77_back(r):
    k = r.choice([Rational(1, 2), 2, 3]); X = r.choice([2, 3]); y1 = r.choice([4, 6])
    if (k * X) > 6: raise Skip("big")
    val = y1 * exp(-k * X)
    distinct(val, y1 * exp(k * X), 1 + y1 - exp(k * X), y1 * (1 - k * X))
    q = rf"A quantity satisfies $\dfrac{{dy}}{{dt}} = {L(k)}y$, and $y({X}) = {y1}$. What is $y(0)$?"
    return it("difficult", "7.7", q, (rf"{y1}e^{{-{L(k * X)}}}", rf"The solution is $y = y_0e^{{{L(k)}t}}$. Then ${y1} = y_0e^{{{L(k * X)}}}$, so $y_0 = {y1}e^{{-{L(k * X)}}}$."),
        [(L(y1 * exp(k * X)), rf"This treats $y = {y1}$ as the value at $t = 0$ and runs the growth forward ${X}$ units. The value at $t = 0$ is smaller, not larger."),
         (L(1 + y1 - exp(k * X)), rf"This uses $y = e^{{{L(k)}t}} + C$ with $C = {y1} - e^{{{L(k * X)}}}$. The constant multiplies the exponential."),
         (L(y1 * (1 - k * X)), rf"This follows the tangent line at $t = {X}$, with slope ${L(k * y1)}$, back to $t = 0$. The slope changes as $y$ changes.")])
t77_back.max = 1

def t77_xy(r):
    y0 = r.choice([2, 3]); X = r.choice([pi / 4, -pi / 4])
    tx = tan(X)
    val = sqrt(2 * tx + y0**2)
    distinct(val, -val, sqrt(2 * tx + y0), sqrt(tx + y0**2))
    q = rf"Let $y = f(x)$ be the solution to $\dfrac{{dy}}{{dx}} = \dfrac{{\sec^{{2}} x}}{{y}}$ with $f(0) = {y0}$. What is $f\left({L(X)}\right)$?"
    return it("moderate", "7.7", q, (L(val), rf"$y\,dy = \sec^{{2}} x\,dx$ gives $\dfrac{{y^{{2}}}}{{2}} = \tan x + C$, so $y^{{2}} = 2\tan x + C_1$, and $f(0) = {y0}$ gives $C_1 = {y0**2}$. Since $f(0) > 0$, $f(x) = \sqrt{{2\tan x + {y0**2}}}$ and $f\left({L(X)}\right) = \sqrt{{{2 * tx + y0**2}}} = {L(val)}$."),
        [(L(-val), r"This is the negative root. The solution passes through a point with $y > 0$, so it takes the positive root."),
         (L(sqrt(2 * tx + y0)), rf"This uses $C_1 = {y0}$, the value of $y$, in place of $y^{{2}} = {y0**2}$."),
         (L(sqrt(tx + y0**2)), r"This drops the factor $2$ when multiplying $\dfrac{y^{2}}{2} = \tan x + C$ by $2$.")])
t77_xy.max = 2

def t77_xy2(r):
    k = r.choice([4, 6]); y0 = r.choice([2, 3])
    h = Rational(k, 2)
    val = y0 * exp(h)
    distinct(val, exp(h) + y0 - 1, y0 * exp(k), y0)
    q = rf"Let $y = f(x)$ be the solution to $\dfrac{{dy}}{{dx}} = {k}xy$ with $f(0) = {y0}$. What is $f(1)$?"
    return it("moderate", "7.7", q, (L(val), rf"$\ln|y| = {co(h)}x^{{2}} + C$, and $f(0) = {y0}$ gives $y = {y0}e^{{{co(h)}x^{{2}}}}$, so $f(1) = {L(val)}$."),
        [(L(exp(h) + y0 - 1), rf"This uses $y = e^{{{co(h)}x^{{2}}}} + C$ with $C = {y0 - 1}$. The initial value multiplies the exponential."),
         (L(y0 * exp(k)), rf"This integrates ${k}x$ as ${k}x^{{2}}$. The antiderivative is ${co(h)}x^{{2}}$."),
         (L(y0), r"This follows the tangent line at $x = 0$, which is horizontal because the slope there is $0$. The slope is not $0$ for $x > 0$.")])
t77_xy2.max = 1

def t77_poly(r):
    a = r.choice([2, 3]); b = r.choice([1, -1, 4]); y0 = r.choice([1, 2, -3]); X = r.choice([1, 2])
    rhs = a * x**2 + b
    F = integrate(rhs, x); val = F.subs(x, X) + y0
    distinct(val, F.subs(x, X), rhs.subs(x, X), val + y0)
    q = rf"If $\dfrac{{dy}}{{dx}} = {L(rhs)}$ and $y(0) = {y0}$, what is $y({X})$?"
    return it("easy", "7.7", q, (num(val), rf"$y = {L(F)} + C$, and $y(0) = {y0}$ gives $C = {y0}$, so $y({X}) = {L(val)}$."),
        [(num(F.subs(x, X)), r"The constant from the initial condition is left out."),
         (num(rhs.subs(x, X)), rf"This is the slope $\dfrac{{dy}}{{dx}}$ at $x = {X}$, not the value of $y$."),
         (num(val + y0), rf"The initial value ${y0}$ is added twice.")])
t77_poly.max = 1

def t77_newton(r):
    # The first item cools an object toward the room temperature; the second warms one.
    t77_newton.n = getattr(t77_newton, "n", 0) + 1
    k = r.choice([Rational(1, 10), Rational(1, 4)])
    if t77_newton.n % 2 == 1:
        A = r.choice([20, 25]); T0 = r.choice([90, 200, 150])
        q = rf"The temperature of an object satisfies $\dfrac{{dT}}{{dt}} = -{L(k)}(T - {A})$, with $T(0) = {T0}$. Which expression gives $T(t)$?"
        return it("moderate", "7.7", q, (rf"T = {A} + {T0 - A}e^{{-{L(k)}t}}", rf"Separate: $\ln|T - {A}| = -{L(k)}t + C$, so $T - {A} = Ce^{{-{L(k)}t}}$. $T(0) = {T0}$ gives $C = {T0 - A}$."),
            [(rf"T = {T0}e^{{-{L(k)}t}}", rf"This solves $\dfrac{{dT}}{{dt}} = -{L(k)}T$. The temperature decays toward ${A}$, not toward $0$."),
             (rf"T = {A} + {T0}e^{{-{L(k)}t}}", rf"This uses the starting temperature as the constant. Then $T(0) = {A + T0}$, not ${T0}$."),
             (rf"T = {A} - {T0 - A}e^{{-{L(k)}t}}", rf"Then $T(0) = {A - (T0 - A)}$. The object starts above ${A}$ degrees, so the exponential term is added.")])
    A = 70; T0 = r.choice([30, 40])
    q = rf"A cold drink is placed in a room at ${A}$ degrees. Its temperature satisfies $\dfrac{{dT}}{{dt}} = -{L(k)}(T - {A})$, with $T(0) = {T0}$. Which expression gives $T(t)$?"
    return it("moderate", "7.7", q, (rf"T = {A} - {A - T0}e^{{-{L(k)}t}}", rf"Separate: $\ln|T - {A}| = -{L(k)}t + C$, so $T - {A} = Ce^{{-{L(k)}t}}$. $T(0) = {T0}$ gives $C = {T0} - {A} = -{A - T0}$."),
        [(rf"T = {A} + {A - T0}e^{{-{L(k)}t}}", rf"Then $T(0) = {A + (A - T0)}$. The drink starts below ${A}$ degrees, so the constant $T(0) - {A}$ is negative."),
         (rf"T = {A} - {T0}e^{{-{L(k)}t}}", rf"This uses the starting temperature as the constant. Then $T(0) = {A - T0}$, not ${T0}$."),
         (rf"T = {T0} + {A - T0}e^{{-{L(k)}t}}", rf"This swaps the roles of the two temperatures. As $t$ increases it approaches ${T0}$, but the drink warms toward the room temperature, ${A}$.")])
t77_newton.max = 2

def t77_domain(r):
    q = r"Let $y = f(x)$ be the solution to $\dfrac{dy}{dx} = 3x^{2}y^{2}$ with $f(0) = 1$. On which interval is $f$ defined?"
    return it("difficult", "7.7", q, (text_choice(r"$x < 1$"), r"$\dfrac{dy}{y^{2}} = 3x^{2}\,dx$ gives $-\dfrac{1}{y} = x^{3} + C$, and $f(0) = 1$ gives $C = -1$. So $f(x) = \dfrac{1}{1 - x^{3}}$, which is undefined only at $x = 1$. The solution lives on the interval to the left of $x = 1$, which contains $x = 0$."),
        [(text_choice(r"$0 \le x < 1$"), r"This starts at the initial point, but the solution also extends to the left of $x = 0$; $1 - x^{3}$ is never $0$ for $x < 0$."),
         (text_choice(r"$-1 < x < 1$"), r"This assumes a second break at $x = -1$. But $1 - x^{3} = 0$ only at $x = 1$, so $f$ is defined for every $x < 1$."),
         (text_choice(r"$x \ne 1$"), r"A particular solution is defined on one interval containing the initial point. It cannot continue across the break at $x = 1$.")])
t77_domain.max = 1

def t77_cube(r):
    y0 = r.choice([2, 3]); X = 1
    val = cbrt(X**3 + y0**3)
    w1, w2, w3 = cbrt(X**3 + y0), -val, Rational(X**3, 3) + y0
    distinct(val, w1, w2, w3)
    q = rf"Let $y = f(x)$ be the solution to $\dfrac{{dy}}{{dx}} = \dfrac{{x^{{2}}}}{{y^{{2}}}}$ with $f(0) = {y0}$. What is $f({X})$?"
    cr = lambda n: rf"\sqrt[3]{{{n}}}"
    return it("moderate", "7.7", q, (cr(X**3 + y0**3), rf"$y^{{2}}\,dy = x^{{2}}\,dx$ gives $\dfrac{{y^{{3}}}}{{3}} = \dfrac{{x^{{3}}}}{{3}} + C$, so $y^{{3}} = x^{{3}} + C_1$. $f(0) = {y0}$ gives $C_1 = {y0**3}$, so $f({X}) = \sqrt[3]{{{X**3 + y0**3}}}$."),
        [(cr(X**3 + y0), rf"This uses $C_1 = {y0}$, the value of $y$, in place of $y^{{3}} = {y0**3}$."),
         ("-" + cr(X**3 + y0**3), r"A cube root has one real value, and it has the same sign as the number under it. Since $f(0) > 0$, the solution takes the positive value."),
         (L(w3), r"This integrates $x^{2}$ but drops the $y^{2}$ that belongs with $dy$.")])
t77_cube.max = 1

def t77_f2(r):
    a = 6; b = r.choice([-2, 4]); c = r.choice([1, -3]); d = r.choice([2, 5]); X = r.choice([1, 2])
    fp = a * x**2 / 2 + b * x + c; f = a * x**3 / 6 + b * x**2 / 2 + c * x + d
    val = f.subs(x, X); w1 = val - c * X; w2 = fp.subs(x, X); w3 = val - c * X - d + d * X + c
    distinct(val, w1, w2, w3)
    q = rf"A function $f$ satisfies $f''(x) = {L(a * x + b)}$, $f'(0) = {c}$, and $f(0) = {d}$. What is $f({X})$?"
    return it("moderate", "7.7", q, (num(val), rf"$f'(x) = {L(fp)}$, using $f'(0) = {c}$. Then $f(x) = {L(f)}$, using $f(0) = {d}$, so $f({X}) = {L(val)}$."),
        [(num(w1), r"This leaves out the constant from the first antiderivative, so the term " + rf"${L(c * x)}$" + r" is missing."),
         (num(w2), rf"This is $f'({X})$. It stops after one antiderivative; $f$ needs a second."),
         (num(w3), rf"This uses $f'(0)$ as the constant term and $f(0)$ as the coefficient of $x$; the two conditions are swapped.")])
t77_f2.max = 1

def t77_f2b(r):
    a = 12; b = r.choice([-2, 2]); c = r.choice([3, -1]); d = r.choice([1, 4])
    C1 = c - Rational(a, 2) - b
    fp = a * x**2 / 2 + b * x + C1
    C2 = d - (a * x**3 / 6 + b * x**2 / 2 + C1 * x).subs(x, 1)
    f = a * x**3 / 6 + b * x**2 / 2 + C1 * x + C2
    val = f.subs(x, 2)
    w1 = (a * x**3 / 6 + b * x**2 / 2 + c * x + d).subs(x, 2)
    w2 = fp.subs(x, 2)
    g = a * x**3 / 6 + b * x**2 / 2; w3 = g.subs(x, 2) + d - g.subs(x, 1)
    distinct(val, w1, w2, w3)
    q = rf"A function $f$ satisfies $f''(x) = {L(a * x + b)}$, $f'(1) = {c}$, and $f(1) = {d}$. What is $f(2)$?"
    return it("difficult", "7.7", q, (num(val), rf"$f'(x) = {L(a * x**2 / 2 + b * x)} + C_1$, and $f'(1) = {c}$ gives $C_1 = {L(C1)}$. Then $f(x) = {L(f - C2)} + C_2$, and $f(1) = {d}$ gives $C_2 = {L(C2)}$. So $f(2) = {L(val)}$."),
        [(num(w1), rf"This uses ${c}$ and ${d}$ as the constants, as if the conditions were given at $x = 0$. They are given at $x = 1$."),
         (num(w2), r"This is $f'(2)$. It stops after one antiderivative; $f$ needs a second."),
         (num(w3), r"This leaves out the first constant $C_1$ and finds only the second one from $f(1)$.")])
t77_f2b.max = 1

def t77_neg(r):
    y0 = r.choice([-2, -3])
    c = y0**2 - 2
    q = rf"Let $y = f(x)$ be the solution to $\dfrac{{dy}}{{dx}} = \dfrac{{e^{{x}}}}{{y}}$ with $f(0) = {y0}$. Which of the following is $f(x)$?"
    return it("difficult", "7.7", q, (rf"-\sqrt{{2e^{{x}} + {c}}}", rf"$y\,dy = e^{{x}}\,dx$ gives $\dfrac{{y^{{2}}}}{{2}} = e^{{x}} + C$, so $y^{{2}} = 2e^{{x}} + C_1$. $f(0) = {y0}$ gives ${y0**2} = 2 + C_1$, so $C_1 = {c}$. Since $f(0) < 0$, take the negative root."),
        [(rf"\sqrt{{2e^{{x}} + {c}}}", rf"This is the positive root, which gives $f(0) = {-y0}$. The condition $f(0) = {y0}$ needs the negative root."),
         (rf"-\sqrt{{2e^{{x}} + {y0**2}}}", rf"This uses $C_1 = {y0**2}$, the value of $y^{{2}}$, without subtracting $2e^{{0}} = 2$."),
         (rf"-\sqrt{{e^{{x}} + {y0**2 - 1}}}", r"This drops the factor $2$ when multiplying $\dfrac{y^{2}}{2} = e^{x} + C$ by $2$.")])
t77_neg.max = 1

# ---------------------------------------------------------------- 7.8 exponential models
def t78(r):
    P0 = r.choice([100, 500, 200]); T = r.choice([3, 4, 5])
    q = rf"A population grows at a rate proportional to its size. It starts at ${P0}$ and doubles every ${T}$ years. What is the population after ${3 * T}$ years?"
    return it("easy", "7.8", q, (num(P0 * 8), rf"In ${3 * T}$ years there are $3$ doubling periods, so the population is ${P0}\cdot 2^{{3}} = {P0 * 8}$."),
        [(num(P0 * 6), rf"This multiplies by $2 \cdot 3 = 6$. Three doublings multiply by $2^{{3}} = 8$."),
         (num(P0 * 4), rf"This adds ${P0}$ in each period, a linear model. Growth proportional to size doubles the whole population each period."),
         (num(P0 * 16), r"This counts four doubling periods. In $" + f"{3 * T}" + r"$ years there are three.")])
t78.max = 1

TEMPLATES = {"7.1": [t71_prop], "7.2": [t72_verify, t72_sec], "7.4": [t74_which, t74_concav],
             "7.6": [t76_xy, t76_xy2, t76_ky, t76_cos, t76_ex],
             "7.7": [t77_exp, t77_back, t77_xy, t77_xy2, t77_poly, t77_newton, t77_domain, t77_cube, t77_f2, t77_f2b, t77_neg],
             "7.8": [t78]}

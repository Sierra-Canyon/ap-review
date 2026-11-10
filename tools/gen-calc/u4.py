"""Unit 4, Contextual Applications of Differentiation. Every key and wrong choice is computed.

Each template sets a difficulty the way Albert labels its own Unit 4 items (tools/gen-calc notes): easy is one rule and
one meaning; moderate adds a step (a chain factor, a unit or scale, a table read, a product); difficult links two ideas
(a statement list, a second application of L'Hospital's Rule, two linked rates, a variable removed by similar triangles).
"""
import inspect
import core
from core import *

# ---------------------------------------------------------------- difficulty in the written file
# core.write_deck does not write a difficulty field. Until it does, swap in the same writer plus that one field. Items
# without a difficulty come out byte for byte as before, so other units built in the same run are unchanged.
def _write_deck(path, header, sets_js, items, unit, prefix):
    lines = [header, 'import { graph } from "../../plot.js";', "", "export const sets = {"]
    for sid, code in sets_js.items():
        lines.append(f"  {json.dumps(sid)}: {code},")
    lines.append("};")
    lines.append("")
    lines.append("export default [")
    for n, it in enumerate(items, 1):
        it_id = f"{prefix}-{n:03d}"
        parts = [f'id: "{it_id}"', 'type: "mcq"', f'skill: "u{unit}"', f'topic: "{it["topic"]}"', f'calc: {"true" if it["calc"] else "false"}']
        if it.get("set"):
            parts.append(f'set: "{it["set"]}"')
        if it.get("difficulty"):
            parts.append(f'difficulty: "{it["difficulty"]}"')
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

if "difficulty" not in inspect.getsource(core.write_deck):
    core.write_deck.__code__ = _write_deck.__code__

def I(level, *a, **k):
    it = item(*a, **k)
    it["difficulty"] = level
    return it

def distinct(*v):
    if len(set(simplify(sympify(a)) for a in v)) < len(v):
        raise Skip("same")

def dec(v, dp=None):
    """A short decimal for a rational with a terminating expansion (or rounded to dp places)."""
    v = nsimplify(v)
    if dp is not None:
        return f"{float(v):.{dp}f}"
    s = f"{float(v):.6f}".rstrip("0").rstrip(".")
    if nsimplify(s) != v:
        raise Skip("not a short decimal")
    return s

def fr(v):
    """LaTeX for an exact number, with \\frac (choices are short math)."""
    return L(nsimplify(v))

def dfr(v):
    return D(fr(v))

# ================================================================ 4.1 meaning of the derivative in context
# The table set and its two items, plus the text items, are built in one call (GRAPH_TEMPLATES) so the set is written.
CTX = [("W", "t", "the amount of water in a rain barrel, in gallons", "minutes", "minute", "gallons", "gallons per minute"),
       ("P", "t", "the number of people in a stadium", "minutes", "minute", "people", "people per minute"),
       ("H", "t", "the height of a sunflower, in centimeters", "days", "day", "centimeters", "centimeters per day"),
       ("C", "x", "the cost, in dollars, of printing $x$ posters", "posters", "poster", "dollars", "dollars per poster")]

def t41_meaning(r, F, v, what, tu, tu1, yu, ru):
    a = r.choice([3, 8, 10]); k = r.choice([-4, -6, 5, 12])
    word, other = ("increasing", "decreasing") if k > 0 else ("decreasing", "increasing")
    at = f"${v} = {a}$"
    q = rf"Let ${F}({v})$ be {what}, where ${v}$ is measured in {tu}. Which statement best explains ${F}'({a}) = {k}$?"
    return I("easy", "4.1", q,
        (text_choice(f"When {at}, ${F}$ is {word} at a rate of ${abs(k)}$ {ru}."), rf"${F}'({a})$ is the instantaneous rate of change of ${F}$ at ${v} = {a}$, in {ru}. The {'positive' if k > 0 else 'negative'} sign means ${F}$ is {word} there."),
        [(text_choice(f"When {at}, the value of ${F}$ is ${abs(k)}$ {yu}."), rf"This reads the derivative as the value of the function. ${F}({a})$ is the amount; ${F}'({a})$ is how fast it changes."),
         (text_choice(f"Over the first ${a}$ {tu}, ${F}$ changes by ${k}$ {yu} in total."), rf"This reads ${F}'({a})$ as the total change ${F}({a}) - {F}(0)$. A derivative is a rate at one input."),
         (text_choice(f"When {at}, ${F}$ is {other} at a rate of ${abs(k)}$ {ru}."), rf"The sign is read backward: ${F}'({a}) = {k}$ means ${F}$ is {word}.")])

def t41_units(r, F, v, what, tu, tu1, yu, ru):
    q = (rf"Let ${F}({v})$ be {what}." if v == "x" else rf"Let ${F}({v})$ be {what}, where ${v}$ is measured in {tu}.") + rf" What are the units of ${F}'({v})$?"
    sing = {"gallons": "gallon", "people": "person", "centimeters": "centimeter", "dollars": "dollar"}[yu]
    return I("easy", "4.1", q, (text_choice(ru), rf"A derivative is output over input: {yu} per {tu1}."),
        [(text_choice(yu), r"Those are the units of the function itself, not of its rate of change."),
         (text_choice(f"{tu} per {sing}"), r"The ratio is upside down. The units of a derivative are output per input."),
         (text_choice(f"{ru} per {tu1}"), r"Those are the units of the second derivative, the rate of change of the rate.")])

def t41_second(r, F, v, what, tu, tu1, yu, ru):
    a = r.choice([4, 6])
    q = rf"Let ${F}({v})$ be {what}, where ${v}$ is measured in {tu}. At ${v} = {a}$, ${F}'({a}) > 0$ and ${F}''({a}) < 0$. Which statement is true at ${v} = {a}$?"
    return I("easy", "4.1", q,
        (text_choice(f"${F}$ is increasing, and its rate of change is decreasing."), rf"${F}'({a}) > 0$ means ${F}$ is increasing. ${F}''({a}) < 0$ means the rate ${F}'$ is decreasing: ${F}$ still grows, but more slowly."),
        [(text_choice(f"${F}$ is increasing, and its rate of increase is increasing."), rf"${F}''({a}) < 0$ means the rate of increase, ${F}'$, is getting smaller, not larger."),
         (text_choice(f"${F}$ is decreasing, and its rate of decrease is decreasing."), rf"${F}'({a}) > 0$ means ${F}$ is increasing. The sign of ${F}''$ does not give the direction of ${F}$."),
         (text_choice(f"${F}$ is decreasing, and its rate of decrease is increasing."), r"Both signs are read backward here.")])

def t41_notation(r):
    a = r.choice([5, 7, 9]); k = r.choice([3, 4, 6])
    q = rf"Let $W(t)$ be the amount of water, in gallons, in a tank $t$ minutes after a drain is opened. At $t = {a}$ minutes, water is draining from the tank at a rate of ${k}$ gallons per minute. Which of the following is true?"
    return I("easy", "4.1", q,
        (rf"W'({a}) = -{k}", rf"The rate of change of the amount is $W'$. Draining means the amount is going down, so $W'({a}) = -{k}$."),
        [(rf"W'({a}) = {k}", r"The amount of water is decreasing, so its rate of change is negative."),
         (rf"W({a}) = -{k}", rf"$W({a})$ is the amount of water at $t = {a}$, not the rate."),
         (rf"W'({k}) = -{a}", rf"The input and the output are switched. The input of $W'$ is the time, ${a}$.")])

def t41_museum(r):
    a = 3
    Wf = 2 + t * (6 - t)**2 / 10
    val = diff(Wf, t).subs(t, a)                                   # hundreds of cubic meters per hour
    wrong_prod = (t * diff((6 - t)**2, t) / 10).subs(t, a)         # product rule cut short: t times the derivative of the square
    N = -val * 100; Nw = -wrong_prod * 100
    distinct(N, Nw, -val)
    if val >= 0: raise Skip("sign")
    q = (r"During a storm, the amount of water in a holding pond, in hundreds of cubic meters, is modeled by $W(t) = 2 + \dfrac{t(6 - t)^{2}}{10}$, where $t$ is the number of hours after 9:00 A.M. and $0 \le t \le 6$. "
         rf"Which of the following is the best interpretation of $W'({a})$?")
    s = lambda n, when: text_choice(f"At {when}, the amount of water is decreasing at ${n}$ cubic meters per hour.")
    return I("difficult", "4.1", q,
        (s(dec(N), "noon"), rf"$W'(t) = \dfrac{{(6 - t)^{{2}} - 2t(6 - t)}}{{10}}$, so $W'({a}) = \dfrac{{9 - 18}}{{10}} = {dec(val)}$ hundred cubic meters per hour, which is ${dec(N)}$ cubic meters per hour. $t = {a}$ is ${a}$ hours after 9:00 A.M., which is noon."),
        [(s(dec(-val), "noon"), r"The model measures water in hundreds of cubic meters, so the rate must be multiplied by $100$."),
         (s(dec(N), "3:00 P.M."), rf"$t$ counts hours after 9:00 A.M., so $t = {a}$ is noon. 3:00 P.M. is $t = 6$."),
         (s(dec(Nw), "noon"), rf"The product rule is cut short: only $t \cdot \dfrac{{d}}{{dt}}(6 - t)^{{2}}$ is kept, which gives ${dec(wrong_prod)}$ hundred. The term $(6 - t)^{{2}}$ from the derivative of $t$ is left out.")])

def t41_table(r):
    """A table of a reservoir's volume; two items share it."""
    ts = [0, 3, 5, 9, 12]
    for _ in range(200):
        drop = r.choice([5, 6, 7, 9, 10, 11])
        v5 = r.choice(range(60, 75)); v9 = v5 - drop
        v3 = v5 + r.choice([1, 2, 3, 5]); v0 = v3 + r.choice([2, 4, 5])
        v12 = v9 - r.choice([1, 2, 4])
        vals = [v0, v3, v5, v9, v12]
        key = Rational(v9 - v5, 4)
        wide = Rational(v12 - v3, 9); nodiv = v9 - v5; start = Rational(v9 - v0, 9)
        try:
            distinct(key, wide, nodiv, start)
        except Skip:
            continue
        break
    sid = "c4x-s1"
    head = [r"$t$ (days)"] + [f"${a}$" for a in ts]
    row = [r"$R(t)$ (millions of gallons)"] + [f"${b}$" for b in vals]
    code = ("{ name: " + json.dumps("Water in a reservoir") + ', label: "Table", intro: ' +
            js_string(r"The volume of water in a reservoir is $R(t)$ millions of gallons, where $R$ is differentiable and $t$ is measured in days, $0 \le t \le 12$. Selected values of $R(t)$ are shown in the table below.") +
            ", sources: [{ title: \"\", blocks: [{ table: { head: [" + ", ".join(js_string(h) for h in head) + "], rows: [[" + ", ".join(js_string(c) for c in row) + "]] } }] }] }")
    est = I("easy", "4.1", r"Using the data in the table, what is the best estimate of $R'(7)$, in millions of gallons per day?",
        (fr(key), rf"Use the smallest interval in the table that contains $t = 7$: $R'(7) \approx \dfrac{{R(9) - R(5)}}{{9 - 5}} = \dfrac{{{v9} - {v5}}}{{4}} = {dfr(key)}$."),
        [(fr(wide), rf"This uses $\dfrac{{R(12) - R(3)}}{{12 - 3}}$, a wider interval than needed. The values at $t = 5$ and $t = 9$ are closer to $t = 7$."),
         (fr(nodiv), r"This is the change $R(9) - R(5)$, not divided by the $4$ days it takes."),
         (fr(start), rf"This is the average rate from $t = 0$ to $t = 9$, $\dfrac{{R(9) - R(0)}}{{9}}$, which starts too far from $t = 7$.")], set_id=sid)
    k = dec(-key)
    s = lambda body: text_choice(body)
    interp = I("moderate", "4.1", r"Based on the table, which of the following best describes the water in the reservoir at $t = 7$?",
        (s(f"At $t = 7$, the volume is decreasing at about ${k}$ million gallons per day."), rf"$R'(7) \approx \dfrac{{R(9) - R(5)}}{{4}} = {dfr(key)}$. The derivative is a rate in millions of gallons per day, and the negative sign means the volume is going down."),
        [(s(f"At $t = 7$, the volume is decreasing at about ${k}$ gallons per day."), r"$R$ is measured in millions of gallons, so the rate is in millions of gallons per day."),
         (s(f"At $t = 7$, the volume is increasing at about ${k}$ million gallons per day."), r"The values fall from $t = 5$ to $t = 9$, so the estimate is negative and the volume is decreasing."),
         (s(f"From $t = 0$ to $t = 7$, the volume falls by about ${k}$ million gallons."), r"This reads a rate at one instant as a total change over the first $7$ days.")], set_id=sid)
    return [est, interp], sid, code

def build41(r):
    its, sid, code = t41_table(r)
    timed = r.sample(CTX[:3], 2)
    its.append(t41_meaning(r, *timed[0]))
    its.append(t41_units(r, *r.choice([c for c in CTX if c not in timed])))
    its.append(t41_second(r, *timed[1]))
    its.append(t41_notation(r))
    its.append(t41_museum(r))
    return its, sid, code

def build41_safe(r):
    for _ in range(100):
        try:
            return build41(r)
        except Skip:
            continue
    raise Skip("4.1")

GRAPH_TEMPLATES = {"4.1": build41_safe}

# ================================================================ 4.2 straight-line motion
def t42_rest(r):
    p, q0 = r.choice([(1, 5), (2, 6), (1, 7)])
    s = t**3 - Rational(3, 2) * (p + q0) * t**2 + 3 * p * q0 * t
    v = diff(s, t)
    assert set(solve(v, t)) == {p, q0}
    mid = Rational(p + q0, 2)
    q = rf"A particle moves along a line with position $s(t) = {L(s)}$ for $t \ge 0$. At what times is the particle at rest?"
    return I("easy", "4.2", q, (text_choice(f"$t = {p}$ and $t = {q0}$"), rf"At rest means $v(t) = 0$. $v(t) = {L(v)} = 3(t - {p})(t - {q0})$, which is $0$ at $t = {p}$ and $t = {q0}$."),
        [(text_choice("$t = 0$ only"), rf"$s(0) = 0$, but at rest means the velocity is $0$, and $v(0) = {3 * p * q0}$."),
         (text_choice(f"$t = {L(mid)}$ only"), rf"This is where the acceleration $a(t) = 6t - {3 * (p + q0)}$ is $0$."),
         (text_choice(f"$t = 0$, $t = {p}$, and $t = {q0}$"), rf"$s(t) = 0$ at $t = 0$, but $v(0) = {3 * p * q0} \ne 0$, so the particle is moving then.")])

def t42_turn(r):
    c = r.choice([2, 3, 5])
    x_ = c * t**2 * exp(-t)
    v = diff(x_, t); a = diff(x_, t, 2)
    turn = [z for z in solve(v, t) if z > 0]
    assert turn == [2]
    key = simplify(a.subs(t, 2)); w1 = a.subs(t, 0); w2 = x_.subs(t, 2)
    w3 = (c * diff(2 * t - t**2, t) * diff(exp(-t), t)).subs(t, 2)   # derivative of a product taken as the product of derivatives
    distinct(key, w1, w2, w3)
    q = rf"A particle moves along the $x$-axis with position $x(t) = {c}t^{{2}}e^{{-t}}$ for $t \ge 0$. What is the acceleration of the particle at the time it changes direction?"
    return I("moderate", "4.2", q, (L(key), rf"$v(t) = {c}(2t - t^{{2}})e^{{-t}}$ changes sign only at $t = 2$. $a(t) = {c}(t^{{2}} - 4t + 2)e^{{-t}}$, so $a(2) = {L(key)}$."),
        [(L(w1), rf"This is $a(0)$. The velocity is $0$ at $t = 0$, but that is the start, not a change of direction."),
         (L(w2), r"This is $x(2)$, the position at the turn, not the acceleration."),
         (L(w3), rf"This differentiates $v(t) = {c}(2t - t^{{2}})e^{{-t}}$ as the product of the derivatives of its factors, ${c}(2 - 2t)\left(-e^{{-t}}\right)$. The product rule adds two terms.")])

def t42_statements(r):
    k = r.choice([3, 4])
    x_ = (t - k) * exp(t)
    v = diff(x_, t); a = diff(x_, t, 2)
    assert simplify(v - (t - k + 1) * exp(t)) == 0 and simplify(a - (t - k + 2) * exp(t)) == 0
    q = (rf"A particle moves along the $x$-axis with position $x(t) = (t - {k})e^{{t}}$ for $t \ge 0$. Which of the following statements are true?"
         "\n\n" rf"I. The particle moves to the left for $0 < t < {k}$."
         "\n" rf"II. The particle is speeding up for ${k - 2} < t < {k - 1}$."
         "\n" rf"III. The particle is speeding up for $t > {k - 1}$.")
    return I("difficult", "4.2", q,
        (text_choice("III only"), rf"$v(t) = (t - {k - 1})e^{{t}}$ and $a(t) = (t - {k - 2})e^{{t}}$. I is false: $v > 0$ for ${k - 1} < t < {k}$. II is false: there $v < 0$ and $a > 0$, so the particle slows down. III is true: $v > 0$ and $a > 0$."),
        [(text_choice("I and III only"), rf"This judges direction by the sign of $x(t)$. $x(t) < 0$ for $t < {k}$ means the particle is left of the origin; it moves left only where $v(t) < 0$, which is $t < {k - 1}$."),
         (text_choice("II and III only"), rf"This judges speeding up by the sign of $a(t)$ alone. On ${k - 2} < t < {k - 1}$, $a > 0$ but $v < 0$, so the speed decreases."),
         (text_choice("I, II, and III"), r"This makes both mistakes: direction from the sign of $x$, and speeding up from the sign of $a$ alone.")])

# ================================================================ 4.3 rates in other contexts
def t43_cost(r):
    a = r.choice([Rational(1, 2), 2]); b = r.choice([12, 15]); c = 800; n = r.choice([20, 30])
    C = a * x**2 + b * x + c
    val = diff(C, x).subs(x, n)
    w1 = C.subs(x, n); w2 = C.subs(x, n) / n; w3 = (2 * a * x).subs(x, n)
    distinct(val, w1, w2, w3)
    q = rf"The cost, in dollars, of making $x$ bicycles is $C(x) = {D(L(C))}$. What is $C'({n})$, the marginal cost at $x = {n}$, in dollars per bicycle?"
    return I("easy", "4.3", q, (fr(val), rf"$C'(x) = {L(diff(C, x))}$, so $C'({n}) = {fr(val)}$."),
        [(fr(w1), rf"This is $C({n})$, the total cost of making {n} bicycles."),
         (fr(w2), rf"This is $\dfrac{{C({n})}}{{{n}}}$, the average cost per bicycle."),
         (fr(w3), rf"The derivative of the linear term ${b}x$ is left out; it adds ${b}$.")])

def t43_temp(r):
    k = r.choice([1, 2, 4]); A = 70; T0 = r.choice([160, 170, 190])
    f = A + (T0 - A) * exp(-Rational(k, 10) * t)
    val = diff(f, t).subs(t, 0)
    w1 = -val; w2 = f.subs(t, 0); w3 = T0 - A
    distinct(val, w1, w2, w3)
    kk = L(Rational(k, 10))
    q = rf"The temperature of a bowl of soup, in degrees Fahrenheit, is $H(t) = {A} + {T0 - A}e^{{-{kk}t}}$, where $t$ is the number of minutes after it is served. What is $H'(0)$, in degrees Fahrenheit per minute?"
    return I("easy", "4.3", q, (fr(val), rf"$H'(t) = {T0 - A}\left(-{kk}\right)e^{{-{kk}t}}$, so $H'(0) = {fr(val)}$."),
        [(fr(w1), r"The chain rule factor from the exponent is negative; the soup is cooling, so the rate is negative."),
         (fr(w2), r"This is $H(0)$, the temperature when the soup is served, not its rate of change."),
         (fr(w3), rf"This leaves out the chain rule factor $-{kk}$ from the exponent.")])

def t43_growth(r):
    a = r.choice([3, 5]); b = r.choice([40, 60]); T = r.choice([2, 4, 6])
    P = b + a * t**2
    val = diff(P, t).subs(t, T)
    w1 = P.subs(t, T); w2 = Rational(P.subs(t, T) - P.subs(t, 0), T); w3 = diff(P, t, 2).subs(t, T)
    distinct(val, w1, w2, w3)
    q = rf"The number of bacteria in a dish is $B(t) = {L(P)}$ thousand, where $t$ is in hours. At what rate, in thousands per hour, is the number changing at $t = {T}$?"
    return I("easy", "4.3", q, (fr(val), rf"$B'(t) = {L(diff(P, t))}$, so $B'({T}) = {fr(val)}$."),
        [(fr(w1), rf"This is $B({T})$, the number of bacteria at $t = {T}$, not the rate."),
         (fr(w2), rf"This is the average rate $\dfrac{{B({T}) - B(0)}}{{{T}}}$ over the first {T} hours, not the rate at $t = {T}$."),
         (fr(w3), r"This is $B''$, the rate at which the rate changes.")])

def t43_light(r):
    k, d = r.choice([(900, 3), (1800, 5), (800, 4)])
    d_ = Symbol("d", positive=True)
    Ifn = k / d_**2
    val = diff(Ifn, d_).subs(d_, d)
    w1 = Ifn.subs(d_, d); w2 = -2 * k / d**2; w3 = -val
    distinct(val, w1, w2, w3)
    q = rf"The brightness of a lamp, measured in lux at a distance of $d$ meters from it, is $I(d) = \dfrac{{{k}}}{{d^{{2}}}}$. At what rate is the brightness changing with respect to distance at $d = {d}$ meters, in lux per meter?"
    return I("moderate", "4.3", q, (fr(val), rf"$I(d) = {k}d^{{-2}}$, so $I'(d) = -{2 * k}d^{{-3}}$ and $I'({d}) = -\dfrac{{{2 * k}}}{{{d**3}}} = {fr(val)}$."),
        [(fr(w1), rf"This is $I({d})$, the brightness, not its rate of change."),
         (fr(w2), r"The exponent is not lowered: the power rule gives $d^{-3}$, not $d^{-2}$."),
         (fr(w3), r"The sign is lost. Brightness falls as the distance grows, so the rate is negative.")])

def t43_net(r):
    for _ in range(100):
        p = r.choice([20, 30, 36]); qq = r.choice([2, 3, 4]); s = r.choice([4, 10]); a = r.choice([4, 5, 6])
        Ein = p + qq * t; Lout = t**2 + s
        net = (Ein - Lout).subs(t, a)
        dnet = diff(Ein - Lout, t).subs(t, a)
        tot = (Ein + Lout).subs(t, a)
        if net == 0 or abs(net) in (abs(dnet), tot): continue
        break
    word, other = ("increasing", "decreasing") if net > 0 else ("decreasing", "increasing")
    q = (rf"Water flows into a tank at a rate of $E(t) = {L(Ein)}$ gallons per minute and flows out at a rate of $R(t) = {L(Lout)}$ gallons per minute, where $t$ is in minutes. "
         rf"At $t = {a}$, is the amount of water in the tank increasing or decreasing, and at what rate?")
    s_ = lambda w, n: text_choice(f"{w[0].upper() + w[1:]} at ${n}$ gallons per minute")
    return I("moderate", "4.3", q, (s_(word, abs(net)), rf"The amount changes at $E({a}) - R({a}) = {Ein.subs(t, a)} - {Lout.subs(t, a)} = {net}$ gallons per minute, so it is {word} at ${abs(net)}$ gallons per minute."),
        [(s_(other, abs(net)), rf"The rate is $E - R$, not $R - E$. $E({a}) - R({a}) = {net}$, so the amount is {word}."),
         (s_("increasing", tot), r"This adds the two rates. Water flowing out lowers the amount, so subtract it."),
         (s_("decreasing" if dnet < 0 else "increasing", abs(dnet)), rf"This uses $E'({a}) - R'({a}) = {dnet}$, the rate at which the net rate changes, not the net rate itself.")])

def t43_sand(r):
    T, m = r.choice([(4, 2), (5, 1), (6, 2)])
    A = T * m + (T - m) * t; R = t**2
    net = A - R
    assert expand(net + (t - T) * (t + m)) == 0
    vtx = Rational(T - m, 2)
    t1, t3 = T - 1, T + 1
    n3 = -net.subs(t, t3)
    nI = net.subs(t, t1); dI = diff(net, t).subs(t, t1); d3 = diff(net, t).subs(t, t3)
    assert nI > 0 and dI < 0 and n3 > 0 and vtx != T and abs(d3) != n3
    q = (rf"Sand is added to a pile at a rate of $A(t) = {L(A)}$ cubic feet per hour and removed at a rate of $R(t) = t^{{2}}$ cubic feet per hour, where $0 \le t \le {T + 2}$ hours. Which of the following statements are true?"
         "\n\n" rf"I. At $t = {t1}$, the amount of sand in the pile is increasing."
         "\n" rf"II. At $t = {t3}$, the amount of sand is decreasing at a rate of ${n3}$ cubic feet per hour."
         "\n" rf"III. The amount of sand in the pile is greatest at $t = {L(vtx)}$.")
    return I("difficult", "4.3", q,
        (text_choice("I and II only"), rf"The amount changes at $A(t) - R(t) = {L(net)} = -(t - {T})(t + {m})$. I: $A({t1}) - R({t1}) = {nI} > 0$, true. II: $A({t3}) - R({t3}) = {-n3}$, true. III: the rate is positive before $t = {T}$ and negative after, so the amount is greatest at $t = {T}$; false."),
        [(text_choice("I, II, and III"), rf"$t = {L(vtx)}$ is where the net rate $A - R$ is largest, not where the amount is largest. The amount keeps growing until $A - R$ changes sign at $t = {T}$."),
         (text_choice("II and III only"), rf"This rejects I by comparing $A'({t1})$ and $R'({t1})$, and it takes the largest net rate, at $t = {L(vtx)}$, as the largest amount. The amount increases when $A({t1}) > R({t1})$."),
         (text_choice("I and III only"), rf"This rejects II by using $A'({t3}) - R'({t3}) = {d3}$, and it takes the largest net rate as the largest amount. The amount changes at $A({t3}) - R({t3}) = {-n3}$.")])

# ================================================================ 4.4 related rates
def t44_square(r):
    s = r.choice([5, 7, 9]); ds = r.choice([2, 3])
    val = 2 * s * ds
    distinct(val, 2 * s, s**2 * ds, 4 * ds)
    q = rf"Each side of a square is growing at ${ds}$ centimeters per second. How fast is the area of the square growing when each side is ${s}$ centimeters long, in square centimeters per second?"
    return I("easy", "4.4", q, (fr(val), rf"$A = s^{{2}}$, so $\dfrac{{dA}}{{dt}} = 2s\dfrac{{ds}}{{dt}} = 2({s})({ds}) = {val}$."),
        [(fr(2 * s), r"This is $\dfrac{dA}{ds} = 2s$. It still needs the factor $\dfrac{ds}{dt}$."),
         (fr(s**2 * ds), r"This multiplies the area by the rate instead of differentiating."),
         (fr(4 * ds), r"This is the rate of change of the perimeter, $4\dfrac{ds}{dt}$.")])

def t44_chain(r):
    k = r.choice([2, 3]); c = r.choice([3, 5]); dxdt = r.choice([4, -3]); x0 = r.choice([-1, 2])
    y = c * x**k - x
    yp = diff(y, x).subs(x, x0)
    val = yp * dxdt
    distinct(val, yp, y.subs(x, x0) * dxdt, (c * k * x**(k - 1)).subs(x, x0) * dxdt)
    q = rf"The variables $x$ and $y$ are differentiable functions of $t$ with $y = {L(y)}$. If $\dfrac{{dx}}{{dt}} = {dxdt}$ when $x = {x0}$, what is $\dfrac{{dy}}{{dt}}$ at that instant?"
    return I("easy", "4.4", q, (fr(val), rf"$\dfrac{{dy}}{{dt}} = \left({L(diff(y, x))}\right)\dfrac{{dx}}{{dt}} = ({yp})({dxdt}) = {val}$."),
        [(fr(yp), r"This is $\dfrac{dy}{dx}$ at that point; it still needs the factor $\dfrac{dx}{dt}$."),
         (fr(y.subs(x, x0) * dxdt), r"This multiplies $y$ by $\dfrac{dx}{dt}$ instead of differentiating."),
         (fr((c * k * x**(k - 1)).subs(x, x0) * dxdt), r"The derivative of $-x$ is left out; it contributes $-\dfrac{dx}{dt}$.")])

def t44_surface(r):
    rr = r.choice([3, 5]); dr = r.choice([Rational(1, 2), 2])
    val = 8 * pi * rr * dr
    distinct(val, 8 * pi * rr, 4 * pi * rr**2 * dr, 4 * pi * rr * dr)
    q = rf"The radius of a spherical balloon increases at ${fr(dr)}$ inch per second. The surface area of a sphere is $S = 4\pi r^{{2}}$. At what rate is the surface area increasing when the radius is ${rr}$ inches, in square inches per second?".replace("at $2$ inch", "at $2$ inches")
    return I("easy", "4.4", q, (L(val), rf"$\dfrac{{dS}}{{dt}} = 8\pi r\dfrac{{dr}}{{dt}} = 8\pi({rr})\left({fr(dr)}\right) = {L(val)}$."),
        [(L(8 * pi * rr), r"This is $\dfrac{dS}{dr}$. It still needs the factor $\dfrac{dr}{dt}$."),
         (L(4 * pi * rr**2 * dr), r"This multiplies the surface area by $\dfrac{dr}{dt}$ instead of differentiating."),
         (L(4 * pi * rr * dr), r"The power rule brings down a $2$: the derivative of $4\pi r^{2}$ is $8\pi r$, not $4\pi r$.")])

def t44_gas(r):
    C = 1200; V, dV = r.choice([(30, 3), (20, 2)])
    P = Rational(C, V)
    val = -P / V * dV
    w1 = -val; w2 = -Rational(V, 1) / P * dV; w3 = -dV
    distinct(val, w1, w2, w3)
    q = rf"For a gas kept at a constant temperature, the pressure $P$, in kilopascals, and the volume $V$, in liters, satisfy $PV = {C}$. At the instant $V = {V}$ liters, the volume is increasing at ${dV}$ liters per minute. At what rate is the pressure changing at that instant, in kilopascals per minute?"
    return I("moderate", "4.4", q, (fr(val), rf"By the product rule, $\dfrac{{dP}}{{dt}}V + P\dfrac{{dV}}{{dt}} = 0$. When $V = {V}$, $P = {fr(P)}$, so $\dfrac{{dP}}{{dt}} = -\dfrac{{P}}{{V}}\dfrac{{dV}}{{dt}} = -\dfrac{{{fr(P)}}}{{{V}}}({dV}) = {fr(val)}$."),
        [(fr(w1), r"The sign is lost when solving for $\dfrac{dP}{dt}$. As the volume grows, the pressure falls."),
         (fr(w2), r"$P$ and $V$ are switched: this uses $-\dfrac{V}{P}\dfrac{dV}{dt}$."),
         (fr(w3), r"This assumes the two rates are equal and opposite, as if $P + V$ were constant. It is the product $PV$ that is constant.")])

def t44_sphere_link(r):
    k = r.choice([6, 10, 12]); rr = r.choice([2, 3, 4])
    drdt = Rational(k, 1) / (8 * pi * rr)
    val = simplify(4 * pi * rr**2 * drdt)
    w1 = drdt; w2 = 4 * pi * rr**2 * k; w3 = simplify(4 * pi * rr**2 * Rational(k, 1) / (4 * pi * rr))
    distinct(val, w1, w2, w3)
    q = rf"The surface area of a sphere is increasing at ${k}$ square centimeters per second. At what rate is the volume of the sphere increasing when the radius is ${rr}$ centimeters, in cubic centimeters per second? $\left(S = 4\pi r^{{2}},\ V = \tfrac{{4}}{{3}}\pi r^{{3}}\right)$"
    return I("difficult", "4.4", q, (fr(val), rf"From $S$: ${k} = 8\pi({rr})\dfrac{{dr}}{{dt}}$, so $\dfrac{{dr}}{{dt}} = {fr(drdt)}$. Then $\dfrac{{dV}}{{dt}} = 4\pi r^{{2}}\dfrac{{dr}}{{dt}} = 4\pi({rr**2})\left({fr(drdt)}\right) = {fr(val)}$."),
        [(fr(w1), r"This is $\dfrac{dr}{dt}$, the rate of the radius. The question asks for $\dfrac{dV}{dt}$."),
         (L(w2), rf"This uses ${k}$ as $\dfrac{{dr}}{{dt}}$. ${k}$ is the rate of the surface area; $\dfrac{{dr}}{{dt}}$ comes from $\dfrac{{dS}}{{dt}} = 8\pi r\dfrac{{dr}}{{dt}}$."),
         (fr(w3), r"The derivative of $4\pi r^{2}$ is taken as $4\pi r$, which doubles $\dfrac{dr}{dt}$ and the answer.")])

def t44_triangle(r):
    for _ in range(100):
        b = r.choice([6, 8, 10, 12]); h = r.choice([5, 6, 8, 9]); p = r.choice([2, 3]); qq = r.choice([2, 3, 4])
        val = Rational(1, 2) * (p * h - b * qq)
        wrong = Rational(1, 2) * (p * h + b * qq); prod = Rational(1, 2) * p * qq
        if abs(val) < 2 or abs(val) in (wrong, prod) or prod == 1: continue
        break
    word, other = ("increasing", "decreasing") if val > 0 else ("decreasing", "increasing")
    q = (rf"The base $b$ of a triangle is increasing at ${p}$ centimeters per second, and its height $h$ is decreasing at ${qq}$ centimeters per second. "
         rf"At the instant $b = {b}$ centimeters and $h = {h}$ centimeters, how is the area of the triangle changing?")
    s_ = lambda w, n: text_choice(f"{w[0].upper() + w[1:]} at ${fr(n)}$ square centimeters per second")
    return I("difficult", "4.4", q,
        (s_(word, abs(val)), rf"$A = \dfrac{{1}}{{2}}bh$, so $\dfrac{{dA}}{{dt}} = \dfrac{{1}}{{2}}\left(\dfrac{{db}}{{dt}}h + b\dfrac{{dh}}{{dt}}\right) = \dfrac{{1}}{{2}}\left({p}({h}) + {b}(-{qq})\right) = {fr(val)}$, so the area is {word}."),
        [(s_(other, abs(val)), rf"The value is right, but the sign is not: $\dfrac{{dA}}{{dt}} = {fr(val)}$."),
         (s_("increasing", wrong), rf"This uses $\dfrac{{dh}}{{dt}} = {qq}$. The height is decreasing, so $\dfrac{{dh}}{{dt}} = -{qq}$."),
         (s_("decreasing", prod), r"This multiplies the two rates, $\dfrac{1}{2}\dfrac{db}{dt}\cdot\dfrac{dh}{dt}$. The product rule gives two terms.")])

# ================================================================ 4.5 solving related rates problems
def t45_slick(r):
    k = r.choice([6, 12, 20]); rr = r.choice([3, 5])
    val = Rational(k, 1) / (2 * pi * rr)
    w1 = 2 * pi * rr * k; w2 = Rational(k, 1) / (pi * rr**2); w3 = Rational(k, 2 * rr)
    distinct(val, w1, w2, w3)
    q = rf"The area of a circular oil slick is increasing at ${k}$ square meters per minute. How fast is the radius of the slick increasing when the radius is ${rr}$ meters, in meters per minute?"
    return I("easy", "4.5", q, (fr(val), rf"$A = \pi r^{{2}}$, so $\dfrac{{dA}}{{dt}} = 2\pi r\dfrac{{dr}}{{dt}}$. Then ${k} = 2\pi({rr})\dfrac{{dr}}{{dt}}$ and $\dfrac{{dr}}{{dt}} = {fr(val)}$."),
        [(L(w1), r"This multiplies by $2\pi r$ instead of dividing by it."),
         (fr(w2), rf"This divides by the area $\pi({rr})^{{2}}$ instead of by $\dfrac{{dA}}{{dr}} = 2\pi r$."),
         (fr(w3), r"The $\pi$ in $A = \pi r^{2}$ is left out.")])

def t45_rect(r):
    k = r.choice([3, 4]); w0 = r.choice([5, 7]); dw = r.choice([2, 3])
    w_ = Symbol("w", positive=True)
    A = k * w_**2
    val = diff(A, w_).subs(w_, w0) * dw
    w1 = diff(A, w_).subs(w_, w0); w2 = A.subs(w_, w0) * dw; w3 = 2 * w0 * dw
    distinct(val, w1, w2, w3)
    q = rf"The length of a rectangle is always ${k}$ times its width. The width is increasing at ${dw}$ centimeters per second. How fast is the area increasing when the width is ${w0}$ centimeters, in square centimeters per second?"
    return I("easy", "4.5", q, (fr(val), rf"The length is ${k}w$, so $A = {k}w^{{2}}$ and $\dfrac{{dA}}{{dt}} = {2 * k}w\dfrac{{dw}}{{dt}} = {2 * k}({w0})({dw}) = {val}$."),
        [(fr(w1), rf"This is $\dfrac{{dA}}{{dw}} = {2 * k}w$. It still needs the factor $\dfrac{{dw}}{{dt}}$."),
         (fr(w2), r"This multiplies the area by the rate instead of differentiating."),
         (fr(w3), rf"This uses $A = w^{{2}}$ and leaves out the factor ${k}$ from the length.")])

def t45_wall(r):
    Lw, P, s, w = r.choice([(12, 2, Rational(8, 5), 4), (15, 3, Rational(6, 5), 5)])
    xx = Lw - w
    xs = Symbol("x", positive=True)
    y = P * Lw / xs
    val = (diff(y, xs) * s).subs(xs, xx)
    w1 = (diff(y, xs) * s).subs(xs, w); w2 = -val; w3 = y.subs(xs, xx)
    distinct(val, w1, w2, w3)
    q = (rf"A spotlight on the ground shines on a wall ${Lw}$ meters away. A person ${P}$ meters tall walks from the spotlight straight toward the wall at ${dec(s)}$ meters per second, casting a shadow on the wall. "
         rf"At what rate is the height of the shadow on the wall changing when the person is ${w}$ meters from the wall, in meters per second?")
    return I("moderate", "4.5", q, (dec(val), rf"Let $x$ be the distance from the spotlight to the person. Similar triangles give $\dfrac{{y}}{{{Lw}}} = \dfrac{{{P}}}{{x}}$, so $y = \dfrac{{{P * Lw}}}{{x}}$ and $\dfrac{{dy}}{{dt}} = -\dfrac{{{P * Lw}}}{{x^{{2}}}}\dfrac{{dx}}{{dt}}$. With $x = {xx}$: $-\dfrac{{{P * Lw}}}{{{xx**2}}}({dec(s)}) = {dec(val)}$."),
        [(dec(w1), rf"This uses $x = {w}$, the distance to the wall. In $y = \dfrac{{{P * Lw}}}{{x}}$, $x$ is the distance from the spotlight, ${Lw} - {w} = {xx}$."),
         (dec(w2), r"The sign is lost. As the person nears the wall, the shadow gets shorter, so the rate is negative."),
         (dec(w3), rf"This is the height of the shadow, $\dfrac{{{P * Lw}}}{{{xx}}}$, not its rate of change.")])

def t45_sandcone(r):
    k, a = r.choice([(18, 2), (27, 3), (12, 2)])
    h = Symbol("h", positive=True)
    def rate(ratio):  # r = ratio * h
        V = Rational(1, 3) * pi * (ratio * h)**2 * h
        return simplify(k / diff(V, h).subs(h, a))
    val = rate(Rational(3, 2))
    w1 = rate(3); w2 = simplify(k / (Rational(1, 3) * pi * (Rational(3, 2) * a)**2)); w3 = rate(Rational(2, 3))
    distinct(val, w1, w2, w3)
    q = rf"Sand pours onto a conical pile at ${k}$ cubic feet per minute. The diameter of the base of the pile is always $3$ times its height. How fast is the height of the pile increasing when the pile is ${a}$ feet high, in feet per minute? $\left(V = \tfrac{{1}}{{3}}\pi r^{{2}}h\right)$"
    return I("difficult", "4.5", q, (L(val), rf"The radius is half the diameter, so $r = \dfrac{{3h}}{{2}}$ and $V = \dfrac{{1}}{{3}}\pi\left(\dfrac{{3h}}{{2}}\right)^{{2}}h = \dfrac{{3\pi h^{{3}}}}{{4}}$. Then $\dfrac{{dV}}{{dt}} = \dfrac{{9\pi h^{{2}}}}{{4}}\dfrac{{dh}}{{dt}}$, so ${k} = \dfrac{{9\pi({a**2})}}{{4}}\dfrac{{dh}}{{dt}}$ and $\dfrac{{dh}}{{dt}} = {L(val)}$."),
        [(L(w1), r"This uses the diameter as the radius, $r = 3h$. The radius is half the diameter."),
         (L(w2), rf"This holds the radius fixed at ${fr(Rational(3 * a, 2))}$ before differentiating. The radius grows with the height, so substitute $r = \dfrac{{3h}}{{2}}$ first."),
         (L(w3), r"The ratio is upside down: $r = \dfrac{2h}{3}$. The diameter is $3$ times the height, so $2r = 3h$.")])

def t45_plane(r):
    H, X, s = r.choice([(4, 3, 5), (3, 4, 5)])
    xs = Symbol("x", positive=True)
    from sympy import atan
    theta = atan(H / xs)
    val = simplify(diff(theta, xs).subs(xs, X) * s)
    w1 = Rational(-H * s, X**2); w2 = -val; w3 = Rational(-X * s, X**2 + H**2)
    distinct(val, w1, w2, w3)
    q = (rf"An airplane flies horizontally at an altitude of ${H}$ miles, directly away from an observer on the ground, at ${s}$ miles per minute. "
         rf"At what rate is the angle of elevation from the observer to the plane changing when the horizontal distance from the observer to the plane is ${X}$ miles, in radians per minute?")
    return I("difficult", "4.5", q, (fr(val), rf"$\tan\theta = \dfrac{{{H}}}{{x}}$, so $\sec^{{2}}\theta\dfrac{{d\theta}}{{dt}} = -\dfrac{{{H}}}{{x^{{2}}}}\dfrac{{dx}}{{dt}}$. When $x = {X}$, the distance to the plane is $5$, so $\sec^{{2}}\theta = \dfrac{{25}}{{{X**2}}}$. Then $\dfrac{{d\theta}}{{dt}} = \dfrac{{{X**2}}}{{25}}\left(-\dfrac{{{H}}}{{{X**2}}}\right)({s}) = {fr(val)}$."),
        [(fr(w1), r"The factor $\sec^{2}\theta$ from differentiating $\tan\theta$ is left out."),
         (fr(w2), r"The sign is lost. As the plane moves away, the angle of elevation decreases."),
         (fr(w3), rf"The altitude and the horizontal distance are switched, as if $\tan\theta = \dfrac{{x}}{{{H}}}$.")])

# ================================================================ 4.6 linearization
def t46_values(r):
    a = r.choice([3, -2]); fa = r.choice([6, -1]); fpa = r.choice([4, -3]); d = r.choice([Rational(1, 10), Rational(-1, 5)])
    val = fa + fpa * d
    w1 = fpa + fa * d; w2 = fa - fpa * d; w3 = fa + fpa * (a + d)
    distinct(val, w1, w2, w3)
    q = rf"A differentiable function $f$ has $f({a}) = {fa}$ and $f'({a}) = {fpa}$. Using the line tangent to the graph of $f$ at $x = {a}$, what is the approximate value of $f({dec(a + d)})$?"
    return I("easy", "4.6", q, (dec(val, 1), rf"$f({dec(a + d)}) \approx f({a}) + f'({a})({dec(d)}) = {fa} + ({fpa})({dec(d)}) = {dec(val, 1)}$."),
        [(dec(w1, 1), rf"The roles of $f({a}) = {fa}$ and $f'({a}) = {fpa}$ are switched."),
         (dec(w2, 1), rf"The sign of the change in $x$ is reversed: it is ${dec(d)}$."),
         (dec(w3, 1), rf"This multiplies the slope by $x = {dec(a + d)}$ instead of by the change in $x$, ${dec(d)}$.")])

def t46_composite(r):
    p, qq = r.choice([(3, 5), (-1, 2), (2, 3)])
    g2 = p + 2; gp2 = 4 * qq + 1
    val = g2 + gp2 * Rational(1, 10)
    w1 = g2 + (qq + 1) * Rational(1, 10); w2 = g2 + 4 * qq * Rational(1, 10); w3 = p + gp2 * Rational(1, 10)
    distinct(val, w1, w2, w3)
    q = rf"A differentiable function $f$ has $f(4) = {p}$ and $f'(4) = {qq}$. Let $g(x) = f\left(x^{{2}}\right) + x$. Using the line tangent to the graph of $g$ at $x = 2$, what is the approximate value of $g(2.1)$?"
    return I("difficult", "4.6", q, (dec(val, 1), rf"$g(2) = f(4) + 2 = {g2}$ and $g'(x) = 2xf'\left(x^{{2}}\right) + 1$, so $g'(2) = 4({qq}) + 1 = {gp2}$. Then $g(2.1) \approx {g2} + {gp2}(0.1) = {dec(val, 1)}$."),
        [(dec(w1, 1), r"The chain rule factor $2x$ is left out, so the slope is taken as $f'(4) + 1$."),
         (dec(w2, 1), r"The derivative of the $+\,x$ term is left out of $g'(2)$."),
         (dec(w3, 1), rf"This uses $g(2) = f(4) = {p}$ and leaves out the $+\,x$ term, which adds $2$.")])

# ================================================================ 4.7 L'Hospital's Rule
def t47_root(r):
    a = r.choice([2, 4, 5])
    e = (sqrt(x) - a) / (x - a**2)
    val = limit(e, x, a**2)
    assert val == Rational(1, 2 * a)
    q = rf"$\displaystyle \lim_{{x \to {a**2}}} \dfrac{{\sqrt{{x}} - {a}}}{{x - {a**2}}}$ is"
    return I("easy", "4.7", q, (fr(val), rf"The form is $\dfrac{{0}}{{0}}$. By L'Hospital's Rule the limit is $\displaystyle \lim_{{x \to {a**2}}} \dfrac{{1/(2\sqrt{{x}})}}{{1}} = \dfrac{{1}}{{2({a})}} = {fr(val)}$."),
        [(fr(2 * a), r"This is the reciprocal: the derivative of the denominator was put on top."),
         (fr(Rational(1, a)), r"The derivative of $\sqrt{x}$ is $\dfrac{1}{2\sqrt{x}}$; the $2$ was left out."),
         (fr(Rational(1, 2 * a**2)), rf"The derivative of $\sqrt{{x}}$ was taken as $\dfrac{{1}}{{2x}}$. It is $\dfrac{{1}}{{2\sqrt{{x}}}}$, which is $\dfrac{{1}}{{{2 * a}}}$ at $x = {a**2}$.")])

def t47_exp(r):
    k = r.choice([3, 5]); c = r.choice([2, 4])
    e = (exp(k * x) - 1) / (c * x)
    val = limit(e, x, 0)
    distinct(val, Rational(1, c), Rational(c, k), 0)
    q = rf"$\displaystyle \lim_{{x \to 0}} \dfrac{{e^{{{k}x}} - 1}}{{{c}x}}$ is"
    return I("easy", "4.7", q, (fr(val), rf"The form is $\dfrac{{0}}{{0}}$. By L'Hospital's Rule the limit is $\displaystyle \lim_{{x \to 0}} \dfrac{{{k}e^{{{k}x}}}}{{{c}}} = {fr(val)}$."),
        [(fr(Rational(1, c)), rf"The chain rule factor ${k}$ from $e^{{{k}x}}$ was left out."),
         (fr(Rational(c, k)), r"This is the reciprocal: the derivative of the denominator was put on top."),
         ("0", r"This reads the form $\dfrac{0}{0}$ as $0$. The form is indeterminate.")])

def t47_powers(r):
    m_, n_ = r.choice([(5, 4), (6, 4), (3, 5)])
    e = (x**m_ - 1) / (x**n_ - 1)
    val = limit(e, x, 1)
    assert val == Rational(m_, n_)
    distinct(val, Rational(n_, m_), 1, Rational(m_ - 1, n_ - 1))
    q = rf"$\displaystyle \lim_{{x \to 1}} \dfrac{{x^{{{m_}}} - 1}}{{x^{{{n_}}} - 1}}$ is"
    return I("moderate", "4.7", q, (fr(val), rf"The form is $\dfrac{{0}}{{0}}$. By L'Hospital's Rule the limit is $\displaystyle \lim_{{x \to 1}} \dfrac{{{m_}x^{{{m_ - 1}}}}}{{{n_}x^{{{n_ - 1}}}}} = {fr(val)}$."),
        [(fr(Rational(n_, m_)), r"This is the reciprocal: the derivative of the denominator was put on top."),
         ("1", r"This sets $x = 1$ in the derivatives' powers but drops the coefficients the power rule brings down."),
         (fr(Rational(m_ - 1, n_ - 1)), r"This uses the lowered exponents as the coefficients. The power rule brings down the original exponent.")])

def t47_tanln(r):
    a, b = r.choice([(14, 7), (18, 6)])
    e = tan(a * x) / log(1 + b * x)
    val = limit(e, x, 0)
    assert val == Rational(a, b)
    distinct(val, Rational(b, a), Rational(1, b), a)
    q = rf"$\displaystyle \lim_{{x \to 0}} \dfrac{{\tan({a}x)}}{{\ln(1 + {b}x)}}$ is"
    return I("moderate", "4.7", q, (fr(val), rf"The form is $\dfrac{{0}}{{0}}$. By L'Hospital's Rule the limit is $\displaystyle \lim_{{x \to 0}} \dfrac{{{a}\sec^{{2}}({a}x)}}{{{b}/(1 + {b}x)}} = \dfrac{{{a}}}{{{b}}} = {fr(val)}$."),
        [(fr(Rational(b, a)), r"This is the reciprocal: the derivative of the denominator was put on top."),
         (fr(Rational(1, b)), rf"The chain rule factor ${a}$ from $\tan({a}x)$ was left out."),
         (fr(a), rf"The chain rule factor ${b}$ from $\ln(1 + {b}x)$ was left out.")])

def t47_inf(r):
    a, b = r.choice([(3, 4), (5, 2), (2, 7)])
    e = (a * x**2 - 5 * x) / (b * x**2 + 2 * x + 1)
    val = limit(e, x, oo)
    assert val == Rational(a, b)
    q = rf"$\displaystyle \lim_{{x \to \infty}} \dfrac{{{a}x^{{2}} - 5x}}{{{b}x^{{2}} + 2x + 1}}$ is"
    w3 = Rational(-5, 2)
    distinct(val, Rational(b, a), 1, w3)
    return I("moderate", "4.7", q, (fr(val), rf"The form is $\dfrac{{\infty}}{{\infty}}$. One application gives $\dfrac{{{2 * a}x - 5}}{{{2 * b}x + 2}}$, still $\dfrac{{\infty}}{{\infty}}$. A second gives $\dfrac{{{2 * a}}}{{{2 * b}}} = {fr(val)}$."),
        [("1", r"This reads the form $\dfrac{\infty}{\infty}$ as $1$. The form is indeterminate."),
         (fr(Rational(b, a)), r"This is the reciprocal: the derivative of the denominator was put on top."),
         (fr(w3), r"This stops after one application and evaluates $\dfrac{2ax - 5}{2bx + 2}$ at $x = 0$ instead of letting $x \to \infty$.".replace("2ax", f"{2 * a}x").replace("2bx", f"{2 * b}x"))])

def t47_cubic(r):
    e = (2 * x - sin(2 * x)) / x**3
    val = limit(e, x, 0)
    assert val == Rational(4, 3)
    w1 = Rational(1, 3); w3 = Rational(8, 3)
    distinct(val, w1, 0, w3)
    q = r"$\displaystyle \lim_{x \to 0} \dfrac{2x - \sin(2x)}{x^{3}}$ is"
    return I("difficult", "4.7", q, (fr(val), r"Each step is $\dfrac{0}{0}$, so the rule is applied three times: $\dfrac{2 - 2\cos(2x)}{3x^{2}}$, then $\dfrac{4\sin(2x)}{6x}$, then $\dfrac{8\cos(2x)}{6} \to \dfrac{8}{6} = \dfrac{4}{3}$."),
        [(fr(w1), r"The chain rule factor $2$ was kept only in the first step. Each derivative of $\sin(2x)$ or $\cos(2x)$ brings another factor $2$, for $2^{3} = 8$ in all."),
         ("0", r"This stops after two applications and reads $\dfrac{4\sin(2x)}{6x}$ as $0$ because its numerator is $0$. That form is still $\dfrac{0}{0}$."),
         (fr(w3), r"The derivative of $3x^{2}$ was taken as $3x$. It is $6x$, so the denominators are $3x^{2}$, $6x$, and $6$.")])

def t47_trigsq(r):
    a, b = r.choice([(3, 2), (5, 2), (1, 3)])
    e = sin(a * x**2) / (1 - cos(b * x))
    val = limit(e, x, 0)
    assert val == Rational(2 * a, b**2)
    w1 = Rational(2 * a, b); w2 = Rational(a, b**2)
    distinct(val, w1, w2, 0)
    ax2 = "x^{2}" if a == 1 else f"{a}x^{{2}}"
    q = rf"$\displaystyle \lim_{{x \to 0}} \dfrac{{\sin\left({ax2}\right)}}{{1 - \cos({b}x)}}$ is"
    a_ = "" if a == 1 else str(a)
    return I("difficult", "4.7", q, (fr(val), rf"The form is $\dfrac{{0}}{{0}}$. One application gives $\dfrac{{{2 * a}x\cos\left({ax2}\right)}}{{{b}\sin({b}x)}}$, still $\dfrac{{0}}{{0}}$. A second gives $\dfrac{{{2 * a}\cos\left({ax2}\right) - {4 * a * a}x^{{2}}\sin\left({ax2}\right)}}{{{b * b}\cos({b}x)}} \to {D(fr(val)) if Rational(2 * a, b * b).q == b * b else rf"\dfrac{{{2 * a}}}{{{b * b}}} = " + D(fr(val))}$."),
        [(fr(w1), rf"The chain rule factor ${b}$ was left out of the second derivative of $\cos({b}x)$, so the denominator is ${b}$ instead of ${b * b}$."),
         (fr(w2), rf"The factor $2$ from the derivative of ${ax2}$ was left out."),
         ("0", r"This stops after one application and reads the result as $0$ because its numerator is $0$. That form is still $\dfrac{0}{0}$.")])

def t47_expinf(r):
    c = r.choice([3, 4])
    e = (exp(x) + x) / (c * exp(x) + x**2)
    val = limit(e, x, oo)
    assert val == Rational(1, c)
    q = rf"$\displaystyle \lim_{{x \to \infty}} \dfrac{{e^{{x}} + x}}{{{c}e^{{x}} + x^{{2}}}}$ is"
    return I("difficult", "4.7", q, (fr(val), rf"The form is $\dfrac{{\infty}}{{\infty}}$ at each step: $\dfrac{{e^{{x}} + 1}}{{{c}e^{{x}} + 2x}}$, then $\dfrac{{e^{{x}}}}{{{c}e^{{x}} + 2}}$, then $\dfrac{{e^{{x}}}}{{{c}e^{{x}}}} = {fr(val)}$."),
        [("0", rf"This assumes $x^{{2}}$ grows faster than $e^{{x}}$. The exponential grows faster, so both are led by their $e^{{x}}$ terms."),
         (fr(Rational(1, c + 2)), rf"This evaluates $\dfrac{{e^{{x}}}}{{{c}e^{{x}} + 2}}$ at $x = 0$ instead of letting $x \to \infty$."),
         (r"\infty", r"This compares only the numerators' growth. Both top and bottom grow like $e^{x}$, so the ratio stays bounded.")])

def t47_cont(r):
    a, b = r.choice([(12, 4), (15, 5)])
    e = log(1 + a * x) / (exp(b * x) - 1)
    val = limit(e, x, 0)
    assert val == Rational(a, b)
    distinct(val, Rational(b, a), Rational(1, b), Rational(a, 1))
    q = (rf"Let $f(x) = \dfrac{{\ln(1 + {a}x)}}{{e^{{{b}x}} - 1}}$ for $x \ne 0$, and let $f(0) = k$. For what value of $k$ is $f$ continuous at $x = 0$?")
    return I("difficult", "4.7", q, (fr(val), rf"$f$ is continuous at $0$ when $k = \displaystyle\lim_{{x \to 0}} f(x)$. The form is $\dfrac{{0}}{{0}}$, and L'Hospital's Rule gives $\displaystyle\lim_{{x \to 0}} \dfrac{{{a}/(1 + {a}x)}}{{{b}e^{{{b}x}}}} = {fr(val)}$."),
        [(fr(Rational(b, a)), r"This is the reciprocal: the derivative of the denominator was put on top."),
         (fr(Rational(1, b)), rf"The chain rule factor ${a}$ was left out of the derivative of $\ln(1 + {a}x)$."),
         (fr(a), rf"The chain rule factor ${b}$ from $e^{{{b}x}}$ was left out.")])

def t47_logsq(r):
    k = r.choice([2, 3, 4])
    e = (log(1 + k * x) - k * x) / x**2
    val = limit(e, x, 0)
    assert val == Rational(-k**2, 2)
    distinct(val, -val, Rational(-k, 2), 0)
    q = rf"$\displaystyle \lim_{{x \to 0}} \dfrac{{\ln(1 + {k}x) - {k}x}}{{x^{{2}}}}$ is"
    return I("difficult", "4.7", q, (fr(val), rf"The form is $\dfrac{{0}}{{0}}$. One application gives $\dfrac{{\frac{{{k}}}{{1 + {k}x}} - {k}}}{{2x}}$, still $\dfrac{{0}}{{0}}$. A second gives $\dfrac{{-\frac{{{k**2}}}{{(1 + {k}x)^{{2}}}}}}{{2}} \to {fr(val)}$."),
        [(fr(-val), r"The sign is lost in the second derivative: the derivative of $\dfrac{k}{1 + kx}$ is negative.".replace("k}{1 + kx", f"{k}}}{{1 + {k}x")),
         (fr(Rational(-k, 2)), rf"The chain rule factor ${k}$ was left out of the second derivative of $\ln(1 + {k}x)$."),
         ("0", r"This stops after one application and reads the result as $0$ because its numerator is $0$. That form is still $\dfrac{0}{0}$.")])

TEMPLATES = {"4.2": [t42_rest, t42_turn, t42_statements],
             "4.3": [t43_cost, t43_temp, t43_growth, t43_light, t43_net, t43_sand],
             "4.4": [t44_square, t44_chain, t44_surface, t44_gas, t44_sphere_link, t44_triangle],
             "4.5": [t45_slick, t45_rect, t45_wall, t45_sandcone, t45_plane],
             "4.6": [t46_values, t46_composite],
             "4.7": [t47_root, t47_exp, t47_powers, t47_tanln, t47_inf, t47_cubic, t47_expinf, t47_cont, t47_logsq, t47_trigsq]}
for _fns in TEMPLATES.values():
    for _f in _fns:
        _f.max = 1

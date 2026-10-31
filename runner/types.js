// Types, conversions, and the built-in members the course uses.

export const isList = (t) => typeof t === "string" && t.startsWith("List<");
export const elemOf = (t) => t.slice(5, -1);
export const isNum = (t) => t === "int" || t === "double" || t === "char";
export const isStr = (t) => t === "string" || t === "string?";
export const plain = (t) => (t === "string?" ? "string" : t);
// The name .NET uses in conversion messages (CS0029, CS1503): List<T> is spelled out in full.
export const full = (t) => plain(t).replace(/List</g, "System.Collections.Generic.List<");
export const short = (t) => plain(t);

export function typeFromSyntax(ty) {
  if (!ty) return null;
  const n = ty.name;
  if (n === "List" || n === "System.Collections.Generic.List" || n === "Collections.Generic.List" || n === "Generic.List") {
    if (ty.args.length !== 1) return { error: ["CS0305", "Using the generic type 'List<T>' requires 1 type arguments"] };
    const inner = typeFromSyntax(ty.args[0]);
    if (inner.error || inner.unsupported) return inner;
    if (inner.t === "void" || inner.t === "var") return { error: ["CS1547", `Keyword '${inner.t}' cannot be used in this context`] };
    return { t: `List<${inner.t}>` };
  }
  if (ty.args.length) return { error: ["CS0246", `The type or namespace name '${n}<>' could not be found (are you missing a using directive or an assembly reference?)`] };
  const map = { int: "int", Int32: "int", "System.Int32": "int", double: "double", Double: "double", bool: "bool", Boolean: "bool", string: "string", String: "string", char: "char", Char: "char", void: "void", var: "var" };
  if (ty.array) return { unsupported: "arrays" };
  if (map[n]) {
    let t = map[n];
    if (ty.nullable) { if (t === "string") t = "string?"; else return { unsupported: "nullable value types" }; }
    return { t };
  }
  if (["float", "long", "decimal", "byte", "short", "uint", "ulong", "object", "Random", "Dictionary", "StringBuilder"].includes(n)) return { unsupported: `the type '${n}'` };
  return { error: ["CS0246", `The type or namespace name '${n}' could not be found (are you missing a using directive or an assembly reference?)`] };
}

// "id", "implicit", "explicit", or "none"
export function conversion(from, to) {
  if (from === "error" || to === "error") return "id";
  if (from === to) return "id";
  if (plain(from) === plain(to)) return "implicit";
  if (to === "object") return from === "void" ? "none" : "implicit";
  if (from === "null") return isStr(to) || isList(to) ? "implicit" : "none";
  if (to === "double") return from === "int" || from === "char" ? "implicit" : "none";
  if (to === "int") return from === "char" ? "implicit" : from === "double" ? "explicit" : "none";
  if (to === "char") return from === "int" || from === "double" ? "explicit" : "none";
  return "none";
}

const dotnetName = { int: "System.Int32", double: "System.Double", string: "System.String", bool: "System.Boolean", char: "System.Char" };
export function runtimeTypeName(t) {
  t = plain(t);
  if (isList(t)) return "System.Collections.Generic.List`1[" + runtimeTypeName(elemOf(t)) + "]";
  return dotnetName[t] || t;
}

// Static members: Console, Math, int, double, string, char, Convert.
// Each method: list of overloads { params: [type, ...], names: [...], ret } where a param type "num" means int, double, or char and
// "any" means any value. ret may be a function of the argument types.
const numRet = (ts) => (ts.some((t) => t === "double") ? "double" : "int");
export const STATIC = {
  Console: {
    WriteLine: [{ params: [], ret: "void" }, { params: ["any"], names: ["value"], ret: "void" }],
    Write: [{ params: ["any"], names: ["value"], ret: "void" }],
    ReadLine: [{ params: [], ret: "string?" }],
    Clear: [{ params: [], ret: "void" }],
  },
  Math: {
    Max: [{ params: ["num", "num"], ret: numRet }],
    Min: [{ params: ["num", "num"], ret: numRet }],
    Abs: [{ params: ["num"], ret: numRet }],
    Sqrt: [{ params: ["double"], names: ["d"], ret: "double" }],
    Pow: [{ params: ["double", "double"], names: ["x", "y"], ret: "double" }],
    Round: [{ params: ["double"], names: ["a"], ret: "double" }, { params: ["double", "int"], names: ["value", "digits"], ret: "double" }],
    Floor: [{ params: ["double"], names: ["d"], ret: "double" }],
    Ceiling: [{ params: ["double"], names: ["a"], ret: "double" }],
    Clamp: [{ params: ["num", "num", "num"], ret: numRet }],
    Sign: [{ params: ["num"], ret: () => "int" }],
    PI: "double", E: "double",
  },
  int: { Parse: [{ params: ["string"], names: ["s"], ret: "int", sig: "int int.Parse(string s)" }], MaxValue: "int", MinValue: "int" },
  double: { Parse: [{ params: ["string"], names: ["s"], ret: "double", sig: "double double.Parse(string s)" }], MaxValue: "double", MinValue: "double", NaN: "double", PositiveInfinity: "double", NegativeInfinity: "double" },
  string: {
    Join: [{ params: ["string", "list"], names: ["separator", "values"], ret: "string" }],
    IsNullOrEmpty: [{ params: ["string"], names: ["value"], ret: "bool", nullOk: true }],
    IsNullOrWhiteSpace: [{ params: ["string"], names: ["value"], ret: "bool", nullOk: true }],
    Empty: "string",
  },
  char: {
    IsDigit: [{ params: ["char"], names: ["c"], ret: "bool" }],
    IsLetter: [{ params: ["char"], names: ["c"], ret: "bool" }],
    IsLetterOrDigit: [{ params: ["char"], names: ["c"], ret: "bool" }],
    IsUpper: [{ params: ["char"], names: ["c"], ret: "bool" }],
    IsLower: [{ params: ["char"], names: ["c"], ret: "bool" }],
    IsWhiteSpace: [{ params: ["char"], names: ["c"], ret: "bool" }],
    ToUpper: [{ params: ["char"], names: ["c"], ret: "char" }],
    ToLower: [{ params: ["char"], names: ["c"], ret: "char" }],
  },
  Convert: {
    ToInt32: [{ params: ["anyconv"], names: ["value"], ret: "int" }],
    ToDouble: [{ params: ["anyconv"], names: ["value"], ret: "double" }],
    ToString: [{ params: ["any"], names: ["value"], ret: "string" }],
  },
};
STATIC.String = STATIC.string; STATIC.Int32 = STATIC.int; STATIC.Double = STATIC.double; STATIC.Char = STATIC.char;

// Instance members by receiver kind. "T" is the list's element type.
export const INSTANCE = {
  string: {
    Length: "int",
    ToUpper: [{ params: [], ret: "string" }], ToLower: [{ params: [], ret: "string" }],
    Trim: [{ params: [], ret: "string" }], TrimStart: [{ params: [], ret: "string" }], TrimEnd: [{ params: [], ret: "string" }],
    Contains: [{ params: ["string"], names: ["value"], ret: "bool" }, { params: ["char"], names: ["value"], ret: "bool" }],
    StartsWith: [{ params: ["string"], names: ["value"], ret: "bool" }, { params: ["char"], names: ["value"], ret: "bool" }],
    EndsWith: [{ params: ["string"], names: ["value"], ret: "bool" }, { params: ["char"], names: ["value"], ret: "bool" }],
    IndexOf: [{ params: ["string"], names: ["value"], ret: "int" }, { params: ["char"], names: ["value"], ret: "int" }],
    LastIndexOf: [{ params: ["string"], names: ["value"], ret: "int" }, { params: ["char"], names: ["value"], ret: "int" }],
    Substring: [{ params: ["int"], names: ["startIndex"], ret: "string" }, { params: ["int", "int"], names: ["startIndex", "length"], ret: "string" }],
    Replace: [{ params: ["string", "string"], names: ["oldValue", "newValue"], ret: "string" }, { params: ["char", "char"], names: ["oldChar", "newChar"], ret: "string" }],
    PadLeft: [{ params: ["int"], names: ["totalWidth"], ret: "string" }, { params: ["int", "char"], names: ["totalWidth", "paddingChar"], ret: "string" }],
    PadRight: [{ params: ["int"], names: ["totalWidth"], ret: "string" }, { params: ["int", "char"], names: ["totalWidth", "paddingChar"], ret: "string" }],
    Equals: [{ params: ["string"], names: ["value"], ret: "bool" }],
    ToString: [{ params: [], ret: "string" }],
    Count: [{ params: [], ret: "int", linq: true }],
    Split: "unsupported",
    ToCharArray: "unsupported",
  },
  list: {
    Count: "int",
    Add: [{ params: ["T"], names: ["item"], ret: "void" }],
    Insert: [{ params: ["int", "T"], names: ["index", "item"], ret: "void" }],
    Remove: [{ params: ["T"], names: ["item"], ret: "bool" }],
    RemoveAt: [{ params: ["int"], names: ["index"], ret: "void" }],
    Contains: [{ params: ["T"], names: ["item"], ret: "bool" }],
    IndexOf: [{ params: ["T"], names: ["item"], ret: "int" }],
    Clear: [{ params: [], ret: "void" }],
    Sort: [{ params: [], ret: "void" }],
    Reverse: [{ params: [], ret: "void" }],
    ToString: [{ params: [], ret: "string" }],
    Count_: [{ params: [], ret: "int", linq: true }],
    Sum: [{ params: [], ret: "T", linq: true, numeric: true }],
    Max: [{ params: [], ret: "T", linq: true, numeric: true }],
    Min: [{ params: [], ret: "T", linq: true, numeric: true }],
    Average: [{ params: [], ret: "double", linq: true, numeric: true }],
    AddRange: [{ params: ["self"], names: ["collection"], ret: "void" }],
    Where: "unsupported", Select: "unsupported", ToArray: "unsupported", ForEach: "unsupported", Find: "unsupported", OrderBy: "unsupported",
  },
  value: { ToString: [{ params: [], ret: "string" }, { params: ["string"], names: ["format"], ret: "string" }], CompareTo: "unsupported", Equals: [{ params: ["self"], names: ["obj"], ret: "bool" }] },
};

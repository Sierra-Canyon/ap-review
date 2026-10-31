# Book section format

The Learn tab is a book: five chapters, one file per section, `book/chN/<id>.js`, each an ES module with a default export. `book/index.js` lists them in order. The model to copy is `book/ch4/lists-1.js`.

## The section object

```js
export default {
  id: "lists-1",                 // unique, lowercase, letters digits hyphens; used in the URL (#learn-lists-1)
  chapter: 4,
  number: "4.1",
  title: "Make a list, add to it, count it",
  from: "Lists 1 · Day 8",       // the class day it reviews
  minutes: 25,                   // honest estimate for a student working every activity
  skills: ["index"],             // review-site skill ids this section teaches (index, parallel, byhand, forloop, listloop, wr-nolist, wr-logic); [] if none
  goals: ["...", "..."],         // "After this section you can" list, 2 to 4 items, each a plain action
  blocks: [ ... ],               // the page, top to bottom
};
```

## Blocks

Prose fields (`md`) are a small Markdown: paragraphs separated by a blank line, `**bold**`, `*italic*`, `` `code` ``, lists with `- ` or `1. `, and `## Heading` / `### Heading` lines. Nothing else (no links, no tables, no HTML).

| type | fields | what the student sees |
|---|---|---|
| `text` | `md` | prose |
| `note` | `md`, `kind` ("note" or "trap") | a boxed note. Use "trap" for a mistake students make, named in advance. |
| `recipe` | `title`, `template`, `parts: [{ slot, meaning }]` | Captain Coder's "The Recipe": the syntax as a template, e.g. `{Type} {Name} = {Value};`, then each slot explained. |
| `code` | `code`, optional `stdin`, `expect` | an editable example with **Run**, **Step**, and **Reset**. `expect` is checked by the verifier, never shown: `{ out: "exact stdout" }`, plus `crash: "ArgumentOutOfRangeException"` if it crashes, `error: "CS1061"` if it must not build, `warning: "CS0162"` if that warning is expected. |
| `step` | `code`, `notes: { "<line number>": "what this line does" }`, `expect` | Captain Coder's Back/Next stepper on a fixed program, with a Variables pane. Without a note for a line, the page writes one from what happened ("count is now 2"). Line numbers count from 1. Use for the one example per section that is worth watching line by line. |
| `mcq` | `id`, `question` (md), optional `code`, `choices`, `answer: 0`, `why` (one per choice), `verify` | Check Your Understanding. **The right choice is always written first**; the page shuffles. `why[k]` explains choice k in one or two sentences, and is shown after the student picks it. `verify` is like `expect`, with `run` when the code shown is not the whole program. A conceptual item with nothing to run gets `verify: null`. |
| `parsons` | `id`, `prompt` (md), `lines` (the solution, in order, each line with its real indentation), optional `distractors` (lines that belong to no solution), `expect` | Mixed-up code: the lines are shuffled and the student puts them in order. **Check** runs the student's order and compares the output with `expect.out`, so any order that prints the right thing is accepted. Keep it to 4 to 10 lines. |
| `exercise` | `id`, `prompt` (md), `starter`, `solution`, `tests: [{ call, expect }]`, optional `given`, `hints` (md list, 1 to 3) | Coding Exercise. The student writes or fixes a function. **Check** runs each test: `call` is a C# expression (usually a call to the student's function), `expect` is exactly what `Console.WriteLine(call)` prints. The table shows `PASS` or `should be X (yours gives Y)`, like the quest checker. `given` is extra code the tests may use (helper functions), never shown in the editor. `starter` must build (a stub that returns a placeholder). `starter` and `solution` contain only function definitions: no top-level statements. |
| `ap` | `md` | an "On the AP exam" box: how this idea shows up in the written responses (2026 2(c) without the list, 2025 Set 2 2(b) logic error, 2024 Set 2 2(c) parameters, and so on). |
| `summary` | `items` (md list) | the Summary at the end. 3 to 6 items, each a fact a student can check. |

## The C# students may see

Top-level statements and local functions only, like `Program.cs` and the `dungeon/` files: no `class`, no `static void Main`, no `namespace`. Types: `int`, `double`, `bool`, `string`, `char`, `List<T>`, `var`, `void`. `if` / `else if` / `else`, `for`, `foreach`, `while`, `do`, `break`, `continue`, `return`. `Console.WriteLine`, `Console.Write`, `Console.ReadLine`, `int.Parse`, `double.Parse`, `Math.Max` / `Min` / `Abs` / `Sqrt` / `Pow` / `Round` / `Floor` / `Ceiling`, string `Length`, indexing, `ToUpper`, `ToLower`, `Contains`, `IndexOf`, `Substring`, `Trim`, `Replace`, `StartsWith`, `EndsWith`, `string.Join`, interpolated strings `$"{x}"`. `List<T>`: `new List<T>()`, `new List<T> { a, b }`, `Add`, `Count`, `[i]` read and write, `Insert`, `Remove`, `RemoveAt`, `Contains`, `IndexOf`, `Clear`. No arrays, no classes, no LINQ, no `Random` in anything with an `expect`. Braces always on their own lines, even around one statement.

## Writing rules (JD's, for anything a student reads)

- Second person, present tense. "You", never "we" or "students". No "your teacher".
- **No dashes as punctuation**: no em dash, no en dash, no ` - ` between clauses. Use a comma, a colon, or two sentences. (A minus sign in code is fine.)
- American spelling, Oxford comma.
- Keep what happens; cut commentary about it. No previews of what the section will do, no "this is important", no reassurance ("don't worry"), no forecasts ("you will use this all year"), no effort estimates ("this is the hard part"), no punchline closers, no aphorisms, no "not X, it's Y" reversals.
- Name the traps in advance, with the exact error or output: `ArgumentOutOfRangeException`, `CS1061: 'List<string>' does not contain a definition for 'Length'`.
- Every output, error string, and number in the prose comes from a run. The verifier runs every block.
- Use the game's world: the party is Rook (10 health, 4 attack), Mote (7, 3), and Hero (8, 3); loot like `potion`, `arrow`, `rope`, `torch`; monsters like Grub, Bat, Wolf, Slime, Ogre. Do not copy items from the review deck (`decks/csp-q3.js`) or from the quizzes word for word.
- Mac keys: F5 is written "F5 (Mac: Fn+F5)".

## Checking a section

```
node tools/verify-book.mjs book/ch4/lists-1.js
```

Builds and runs every `code`, `step`, `mcq`, `parsons`, and `exercise` block on .NET 10 and checks it against `expect`. Every check has to pass.

export default {
  id: "functions-1",
  chapter: 3,
  number: "3.1",
  title: "Define a function, then call it",
  from: "Functions 1 · Day 1",
  minutes: 20,
  skills: [],
  goals: [
    "Define a function with no parameters",
    "Call a function, and say what runs and in what order",
    "Trace a function that calls another function",
    "Fix `CS0103` and `CS0201` in a call",
  ],
  blocks: [
    {
      type: "text",
      md: "A **function** is a block of code with a name. You write it once, in a **definition**, and run it as many times as you like, each time with a **call**.",
    },
    {
      type: "recipe",
      title: "Defining a function with no parameters",
      template: "void {Name}()\n{\n    {Body}\n}",
      parts: [
        { slot: "void", meaning: "this function hands nothing back: it only does something, like printing" },
        { slot: "{Name}", meaning: "the function's name. C# function names start with a capital letter: `PrintRule`, `PrintCampSign`." },
        { slot: "()", meaning: "empty parentheses: the function takes nothing in" },
        { slot: "{Body}", meaning: "the statements between the braces. They run, top to bottom, every time the function is called." },
      ],
    },
    {
      type: "text",
      md: "Run this program. It defines one function.",
    },
    {
      type: "code",
      code: `void PrintRule()
{
    Console.WriteLine("====================");
}`,
      expect: { out: "", warning: "CS8321" },
    },
    {
      type: "text",
      md: "Nothing prints. The build even warns: `CS8321: The local function 'PrintRule' is declared but never used`. The definition tells the computer how to print the line. Nothing has told it when.\n\nA call is the function's name, the parentheses, and a semicolon: `PrintRule();`. Add one above the definition and run it again.",
    },
    {
      type: "code",
      code: `PrintRule();

void PrintRule()
{
    Console.WriteLine("====================");
}`,
      expect: { out: "====================" },
    },
    {
      type: "text",
      md: "## A function that calls a function\n\nThe body of a function can call another function. Step through this program and watch the yellow line jump into a body and come back.",
    },
    {
      type: "step",
      code: `PrintCampSign();
PrintCampSign();

void PrintCampSign()
{
    Console.WriteLine("  CAMP: rest here");
    PrintRule();
}

void PrintRule()
{
    Console.WriteLine("====================");
}`,
      notes: {
        "1": "A call. The computer goes to the body of PrintCampSign and runs it from the top.",
        "6": "Prints the first line of the sign.",
        "7": "A call inside a function. The computer goes to PrintRule, runs its body, and comes back to the line after this one.",
        "12": "PrintRule's only line. When the body ends, the computer goes back to where the call came from.",
        "2": "The second call runs the whole body of PrintCampSign again. The body was typed once.",
      },
      expect: { out: "  CAMP: rest here\n====================\n  CAMP: rest here\n====================" },
    },
    {
      type: "text",
      md: "Each call to `PrintCampSign` puts two lines on the screen, and its body has one `Console.WriteLine`. The second line comes from the call to `PrintRule` inside it.\n\n`PrintRule` is defined below the function that calls it, and the program builds. The order you define functions in does not matter. The order of the calls is the order things happen on the screen.",
    },
    {
      type: "code",
      code: `PrintRule();
PrintCaveName();
PrintRule();

void PrintCaveName()
{
    Console.WriteLine("  THE GRUB CAVES");
}

void PrintRule()
{
    Console.WriteLine("====================");
}`,
      expect: { out: "====================\n  THE GRUB CAVES\n====================" },
    },
    {
      type: "text",
      md: "## Two mistakes in a call\n\nThis call has a lowercase `s` where the definition has a capital `S`.",
    },
    {
      type: "code",
      code: `PrintCampsign();

void PrintCampSign()
{
    Console.WriteLine("  CAMP: rest here");
}`,
      expect: { error: "CS0103" },
    },
    {
      type: "text",
      md: "It does not build: `CS0103: The name 'PrintCampsign' does not exist in the current context`. The computer does not guess. One letter off, and as far as it knows there is no such function. Put the name in the call next to the name in the definition and compare them letter by letter.",
    },
    {
      type: "note",
      kind: "trap",
      md: "A name without parentheses is not a call. `PrintCampSign;` does not build: `CS0201: Only assignment, call, increment, decrement, await, and new object expressions can be used as a statement`. The parentheses make it a call. Run the program below, then add `()`.",
    },
    {
      type: "code",
      code: `PrintCampSign;

void PrintCampSign()
{
    Console.WriteLine("  CAMP: rest here");
}`,
      expect: { error: "CS0201" },
    },
    {
      type: "mcq",
      id: "functions-1-q1",
      question: "How many lines does this program print?",
      code: `PrintWarning();
PrintWarning();
PrintWarning();

void PrintWarning()
{
    Console.WriteLine("A Bat circles overhead.");
    PrintRule();
}

void PrintRule()
{
    Console.WriteLine("~~~~~~~~");
}`,
      choices: ["6", "3", "2", "0"],
      answer: 0,
      why: [
        "Each call to PrintWarning prints its own line and then calls PrintRule, which prints one more. Three calls, two lines each.",
        "3 is the number of calls. Each call prints two lines, because PrintWarning calls PrintRule.",
        "2 is the number of Console.WriteLine statements in the program. PrintWarning runs three times.",
        "The calls are above the definitions, and that is fine. Definition order does not matter.",
      ],
      verify: { out: "A Bat circles overhead.\n~~~~~~~~\nA Bat circles overhead.\n~~~~~~~~\nA Bat circles overhead.\n~~~~~~~~" },
    },
    {
      type: "mcq",
      id: "functions-1-q2",
      question: "What does this program print?",
      code: `void PrintTorch()
{
    Console.WriteLine("You light a torch.");
}

void PrintRope()
{
    Console.WriteLine("You tie a rope.");
}

PrintRope();
PrintTorch();`,
      choices: [
        "The rope line, then the torch line.",
        "The torch line, then the rope line.",
        "Nothing. A call has to come before the definitions.",
        "It does not build, because PrintTorch is defined before it is called.",
      ],
      answer: 0,
      why: [
        "PrintRope is called first, so its line prints first. The order of the calls decides the order on the screen.",
        "PrintTorch is defined first, but the order of the definitions does not matter. PrintRope is called first.",
        "Calls can go above or below the definitions. These two calls run.",
        "A function can be defined anywhere in the program. This builds.",
      ],
      verify: { out: "You tie a rope.\nYou light a torch." },
    },
    {
      type: "mcq",
      id: "functions-1-q3",
      question: "What happens?",
      code: `printRule();

void PrintRule()
{
    Console.WriteLine("====================");
}`,
      choices: [
        "It does not build: the name 'printRule' does not exist in the current context (CS0103).",
        "It prints the row of = signs.",
        "It builds and prints nothing.",
        "It builds, then crashes when the call runs.",
      ],
      answer: 0,
      why: [
        "printRule and PrintRule differ in their first letter, and C# treats them as two different names. No function is called printRule.",
        "The call has a lowercase p. As far as C# knows, there is no function with that name.",
        "A misspelled name stops the build. Nothing runs.",
        "The compiler finds the missing name before the program runs.",
      ],
      verify: { error: "CS0103" },
    },
    {
      type: "parsons",
      id: "functions-1-p1",
      prompt: "Put the lines in order so the program prints `The cave mouth is dark.` and then `~~~~~~~~~~`.",
      lines: [
        `PrintEntrance();`,
        `void PrintEntrance()`,
        `{`,
        `    Console.WriteLine("The cave mouth is dark.");`,
        `    PrintRule();`,
        `}`,
        `void PrintRule()`,
        `{`,
        `    Console.WriteLine("~~~~~~~~~~");`,
        `}`,
      ],
      distractors: [`    PrintRule;`],
      expect: { out: "The cave mouth is dark.\n~~~~~~~~~~" },
    },
    {
      type: "exercise",
      id: "functions-1-e1",
      prompt: "In an exercise, a function hands its text back with `return` instead of printing it, so the test can check it. `return` is section 3.4.\n\n`Divider` is finished: it returns `~~~~~`. Change `Banner` so it returns `~~~~~ QUESTS ~~~~~`. Build it from two calls to `Divider`, with the text in between joined by `+`. Do not type the tildes in `Banner`.",
      starter: `string Divider()
{
    return "~~~~~";
}

string Banner()
{
    return "?";
}`,
      solution: `string Divider()
{
    return "~~~~~";
}

string Banner()
{
    return Divider() + " QUESTS " + Divider();
}`,
      tests: [
        { call: `Divider()`, expect: "~~~~~" },
        { call: `Banner()`, expect: "~~~~~ QUESTS ~~~~~" },
      ],
      hints: [
        "A call is the name and the parentheses: `Divider()`.",
        "The spaces belong to the text in the middle: `\" QUESTS \"`, with a space on each side.",
      ],
    },
    {
      type: "summary",
      items: [
        "`void PrintRule()` and a body in braces is a definition. Nothing in the body runs until a call.",
        "A call is the name, the parentheses, and a semicolon: `PrintRule();`.",
        "A function defined and never called prints nothing, and the build warns `CS8321`.",
        "The order of the definitions does not matter. The order of the calls is the order things happen.",
        "A misspelled call does not build (`CS0103`). A name with no parentheses does not build (`CS0201`).",
      ],
    },
  ],
};

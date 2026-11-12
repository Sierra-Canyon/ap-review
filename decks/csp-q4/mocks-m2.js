// AP CSP · Milestone 2 written responses · practice forms for WR7 to WR12
// Same item shape as decks/csp-q4/review-m2.js. Every block of code here is checked on .NET 10 by tools/verify.mjs.
// Each form asks the released prompts of the real quiz (the same on Forms A, B and C), in the same order, about a sample
// feature that is in no review item: the Herb Pouch (WR7 to WR10, built up day by day), the Fishing Log (WR11) and the Wishing Well (WR12).
// An item's feedback ends (in facts) with one sentence on answering the same prompt on the quiz and about the student's own code.
// released: the released prompt, as year, set and part ("2024s1-2b", "2026-q1"); the field prompt already holds the prompt's text.

// ---------------------------------------------------------------- the released prompts, word for word
const P_DOC = "Describe one piece of documentation that would be appropriate to include with or in your program. Explain how this documentation can be used by another programmer to better understand a particular code segment in your program.";
const P_TRUE = "Consider the first selection statement included in the Procedure section of your Personalized Project Reference. Identify the Boolean expression in this selection statement. Identify a specific value or set of values that will cause this expression to evaluate to true. Explain why the specified value(s) will cause the expression to evaluate to true.";
const P_NOLIST = "Consider the list included in part (i) of the List section of your Personalized Project Reference. Explain how the list uses abstraction to manage complexity in your program. Suppose the list was not included in your program. Describe how you would need to adjust the code segment in part (ii) of the List section of your Personalized Project Reference so that it has the same behavior. If it is not possible to have the same behavior without the use of the list, explain why.";
const P_ALGO = "Consider the first iteration statement in the Procedure section of your Personalized Project Reference. Identify the variable(s) that determine when the iteration statement stops iterating. Identify specific values for the variable(s) that will cause the iteration statement to stop. Explain why these value(s) would cause the iteration statement to stop. If there are no such variable(s) or specific value(s), explain how the iteration statement stops.";
const P_TWOCALLS = "Consider the procedure identified in part (i) of the Procedure section of your Personalized Project Reference. Write two calls to your procedure that each cause a different code segment in the procedure to execute. Describe the expected behavior of each call. If it is not possible for two calls to your procedure to cause different code segments to execute, explain why this is the case for your procedure.";
const P_PROC = "Consider the procedure included in part (i) of the Procedure section of your Personalized Project Reference. Suppose another programmer modifies the code within this procedure. Describe a modification the other programmer could make that would cause this procedure to have a logic error. Describe how the behavior of this procedure would change because of the error.";
const P_LOGIC = "Consider the code segment in part (ii) of the List section of your Personalized Project Reference. Suppose another programmer modifies this code segment. Describe a modification the other programmer could make to this code segment that would result in a logic error. Explain why this modification would result in a logic error.";
const P_VALIDITY = "Suppose another programmer provides you with a procedure called checkValidity(value) that returns true if a value passed as an argument is considered valid by the other programmer and returns false otherwise. Using the list identified in the List section of your Personalized Project Reference, explain in detailed steps an algorithm that uses checkValidity to check whether all elements in your list are considered valid by the other programmer. Your explanation must be detailed enough for someone else to write the program code for the algorithm that uses checkValidity.";
const P_BADCALL = "Consider the procedure included in part (i) of the Procedure section of your Personalized Project Reference. Another programmer is planning to use your procedure in a different program and wants to write some test cases to check whether it will work. Write a procedure call with specific argument(s) that your procedure will accept but will cause your procedure to behave incorrectly. Describe the incorrect behavior. Explain why the incorrect behavior occurs as a result of this call. If it is not possible for a call with accepted arguments to cause your procedure to behave incorrectly, explain why this is the case for your procedure.";

const PROC = ["Procedure (i)", "Procedure (ii)"];
const FILES = ["MyFeature.cs", "Program.cs"];

const NOTE_DOC = "One point, earned or not, as on the exam: a particular piece of documentation and a particular code segment it helps another programmer understand. Help for the player, or \"comments make code easier to read\", earns nothing.";
const NOTE_TRUE = "One point, earned or not, as on the exam: the Boolean expression of the first selection statement, a specific value that makes it true, and why. A value that makes it false, or no specific value, earns nothing.";
const NOTE_NOLIST = "One point, earned or not, as on the exam, and only when both halves are there. \"The list is not used in part (ii)\" earns nothing.";
const NOTE_ALGO = "One point, earned or not, as on the exam, and only when both halves are there: the variables, and values for them with the reason they stop the loop.";
const NOTE_TWOCALLS = "One point, earned or not, as on the exam. Two calls that run the same code, or calls with no specific arguments, earn nothing.";
const NOTE_PROC = "One point, earned or not, as on the exam. A crash is a logic error if the response explains when and why it happens. A syntax error is not, and a change outside the procedure earns nothing.";
const NOTE_LOGIC = "One point, earned or not, as on the exam. A crash is a logic error if the response explains when and why it happens. A syntax error is not, and \"the program will not run\" with no explanation earns nothing.";
const NOTE_VALIDITY = "One point, earned or not, as on the exam. The steps earn the point only if they visit every element, pass each element (not its index) to checkValidity, give false when one call is false, and give true only after the loop.";
const NOTE_BADCALL = "One point, earned or not, as on the exam. The call needs specific arguments the procedure accepts, and the answer must say what goes wrong and why. A call that does not build earns nothing.";

// ---------------------------------------------------------------- stand-ins the runs need (not shown)
const WORDS = `string FirstWord(string command)
{
    string[] words = command.Split(' ');
    return words[0];
}
string SecondWord(string command)
{
    string[] words = command.Split(' ');
    if (words.Length < 2) return "";
    return words[1];
}`;
const typed = (t) => `string ReadCommand()
{
    return "${t}";
}`;

// ---------------------------------------------------------------- the Herb Pouch: word "herbs", list pouch (WR7 to WR10)
const HERB_HEAL = `int HerbHeal(string herb)
{
    if (herb == "mint") return 2;
    else if (herb == "sage") return 3;
    else if (herb == "moss") return 1;
    else return 0;
}`;
const HERB_EAT = `string command = ReadCommand();
if (FirstWord(command) == "eat")
{
    int healed = HerbHeal(SecondWord(command));
    Console.WriteLine("Rook eats the " + SecondWord(command) + " and heals " + healed + ".");
}
else
{
    Console.WriteLine("I don't know that command. Type help.");
}`;
const eatRun = (t) => `${HERB_EAT}\n${typed(t)}\n${WORDS}\n${HERB_HEAL}`;

const HERB_WORD = `string MyFeatureWord()
{
    return "herbs";
}

string MyFeatureTitle()
{
    return "THE HERB POUCH: every herb the party has picked";
}`;
const HERB_TITLE = "THE HERB POUCH: every herb the party has picked";
const HERB_BRANCH = `string command = ReadCommand();
if (command == MyFeatureWord())
{
    Console.WriteLine(MyFeatureTitle());
}
else if (command == "help")
{
    Console.WriteLine("Commands: w a s d, eat, herbs, help");
}
else
{
    Console.WriteLine("I don't know that command. Type help.");
}`;
const branchRun = (t) => `${HERB_BRANCH}\n${typed(t)}\n${HERB_WORD}`;

const HERB_GATHER = `void Gather(List<string> pouch, string herb)
{
    if (herb != "")
    {
        pouch.Add(herb);
    }
}`;
const HERB_LIST = `List<string> pouch = new List<string>();
Gather(pouch, "mint");
Gather(pouch, "sage");
Gather(pouch, "mint");`;
const HERB_LOOP = `for (int i = 0; i < pouch.Count; i++)
{
    Console.WriteLine(pouch[i]);
}`;

const HERB_COUNT = `int HerbCount(List<string> pouch, string herb)
{
    int count = 0;
    for (int i = 0; i < pouch.Count; i++)
    {
        if (pouch[i] == herb)
        {
            count = count + 1;
        }
    }
    return count;
}`;
const HERB_COUNT_II = `List<string> pouch = new List<string> { "mint", "sage", "mint", "moss" };
Console.WriteLine("mint: " + HerbCount(pouch, "mint"));`;
const HERB_COUNT_CALL = `Console.WriteLine("mint: " + HerbCount(pouch, "mint"));`;
const HERB_ALL_VALID = `bool AllValid(List<string> pouch)
{
    for (int i = 0; i < pouch.Count; i++)
    {
        if (checkValidity(pouch[i]) == false)
        {
            return false;
        }
    }
    return true;
}
// A stand-in: this programmer counts only mint, sage and moss as valid herbs.
bool checkValidity(string value)
{
    return value == "mint" || value == "sage" || value == "moss";
}`;

// ---------------------------------------------------------------- the Fishing Log: word "fish", list catches (WR11)
const FISH_WORD = `string MyFeatureWord()
{
    return "fish";
}

string MyFeatureTitle()
{
    return "THE FISHING LOG: every fish the party has caught";
}`;
const FISH_TITLE = "THE FISHING LOG: every fish the party has caught";
const FISH_HOOK = `void Hook(List<string> catches, string fish)
{
    if (fish != "")
    {
        catches.Add(fish);
    }
}`;
const FISH_REPORT = `string FishReport(List<string> catches, string fish)
{
    if (catches.Count == 0)
    {
        return "No fish caught yet. Try the water.";
    }
    string report = "";
    int shown = 0;
    for (int i = 0; i < catches.Count; i++)
    {
        if (fish == "" || catches[i] == fish)
        {
            report = report + "~ " + catches[i] + "\\n";
            shown = shown + 1;
        }
    }
    if (shown == 0)
    {
        return "No " + fish + " caught yet.";
    }
    return report + "Caught: " + shown;
}`;
const FISH_BRANCH = `List<string> catches = new List<string> { "trout", "eel", "trout" };
string command = ReadCommand();
if (FirstWord(command) == MyFeatureWord())
{
    Console.WriteLine(MyFeatureTitle());
    Console.WriteLine(FishReport(catches, SecondWord(command)));
}
else
{
    Console.WriteLine("I don't know that command. Type help.");
}`;
const fishRunWith = (t, report) => `${FISH_BRANCH}\n${typed(t)}\n${WORDS}\n${FISH_WORD}\n${report}`;
const fishRun = (t) => fishRunWith(t, FISH_REPORT);
const FISH_LIST = `List<string> catches = new List<string>();
Hook(catches, "trout");
Hook(catches, "eel");
Hook(catches, "trout");`;
const FISH_CALL = `Console.WriteLine(FishReport(catches, ""));`;

// ---------------------------------------------------------------- the Wishing Well: word "wishes", list wishes (WR12)
const WISH_LAST = `string LastWishes(List<string> wishes, int howMany)
{
    string report = "";
    for (int i = wishes.Count - howMany; i < wishes.Count; i++)
    {
        report = report + "* " + wishes[i] + "\\n";
    }
    return report + "Wishes made: " + wishes.Count;
}`;
const WISH_LAST_DOC = `// Shows the newest wishes made at the well, oldest of them first.
// wishes: every wish made so far. howMany: how many of the newest wishes to show.
${WISH_LAST}`;
const WISH_II = `List<string> wishes = new List<string> { "gold", "luck", "health", "gold" };
Console.WriteLine(LastWishes(wishes, 2));`;
const WISH_MAKE = `void Wish(List<string> wishes, string wish)
{
    if (wish != "")
    {
        wishes.Add(wish);
    }
}`;
const WISH_LIST = `List<string> wishes = new List<string>();
Wish(wishes, "gold");
Wish(wishes, "luck");
Wish(wishes, "health");
Wish(wishes, "gold");`;
const WISH_CALL = `Console.WriteLine(LastWishes(wishes, 2));`;
const WISH_OUT = "* health\n* gold\nWishes made: 4";

const items = [
  // ================================================================ WR7 Practice: The Command Chain
  {
    id: "m2wr7-01", skill: "wr-count", type: "wr",
    source: "2024 exam, Set 1, question 2(b)",
    released: "2024s1-2b",
    labels: PROC,
    listI: HERB_HEAL,
    listII: HERB_EAT,
    prompt: P_TWOCALLS,
    rows: [
      {
        name: "Two calls with specific arguments that run different code",
        levels: [
          "Missing, calls with no specific arguments, or two calls that end in the same place (HerbHeal(\"rock\") and HerbHeal(\"stone\") both reach the else).",
          "Two calls that do run different code, but without saying which code each one runs.",
          "Two calls such as HerbHeal(\"mint\"), which returns from the first if, and HerbHeal(\"rock\"), which passes every test and reaches the else.",
        ],
      },
      {
        name: "The expected behavior of each call",
        levels: [
          "Missing, or results the code does not give.",
          "Gives what one call returns, but not the other.",
          "HerbHeal(\"mint\") returns 2, because herb == \"mint\" is true. HerbHeal(\"rock\") returns 0, because all three tests are false.",
        ],
      },
    ],
    model: "First call: HerbHeal(\"mint\"). The first test, herb == \"mint\", is true, so return 2 runs and none of the other tests is checked. The call returns 2, and eat mint prints Rook eats the mint and heals 2.\n\nSecond call: HerbHeal(\"rock\"). herb == \"mint\", herb == \"sage\" and herb == \"moss\" are all false, so the else runs and the call returns 0. eat rock prints Rook eats the rock and heals 0.\n\nThe first call runs the code in the first if, and the second runs the code in the else.",
    note: NOTE_TWOCALLS,
    facts: "HerbHeal(\"mint\") is 2, HerbHeal(\"sage\") is 3, HerbHeal(\"moss\") is 1 and HerbHeal(\"rock\") is 0. On the quiz, and on the exam about your own code: pick two arguments that end in different branches of the chain, one that makes the first if true and one that reaches the else, and say what each call returns.",
    verify: {
      cases: [
        { run: eatRun("eat mint"), out: "Rook eats the mint and heals 2." },
        { run: `Console.WriteLine(HerbHeal("mint") + " " + HerbHeal("sage") + " " + HerbHeal("moss") + " " + HerbHeal("rock"));\n${HERB_HEAL}`, out: "2 3 1 0" },
        { run: eatRun("eat rock"), out: "Rook eats the rock and heals 0." },
      ],
    },
  },
  {
    id: "m2wr7-02", skill: "wr-select", type: "wr",
    source: "2025 exam, Set 1, question 2(a)",
    released: "2025s1-2a",
    labels: PROC,
    listI: HERB_HEAL,
    listII: HERB_EAT,
    prompt: P_TRUE,
    rows: [
      {
        name: "The Boolean expression and a value that makes it true",
        levels: [
          "Missing, an expression from further down the chain (herb == \"sage\"), a value that makes it false (\"sage\", or \"Mint\" with a capital), or no specific value.",
          "Names herb == \"mint\" but gives no specific value.",
          "herb == \"mint\", the first if in HerbHeal, with the value \"mint\" passed in as herb (the player types eat mint).",
        ],
      },
      {
        name: "Why that value makes it true",
        levels: [
          "Missing, or a reason the code does not give.",
          "\"Because it matches,\" with nothing about the two strings.",
          "When herb is \"mint\", the two strings are exactly the same, so == gives true and HerbHeal returns 2.",
        ],
      },
    ],
    model: "The first selection statement is if (herb == \"mint\") in HerbHeal, so the Boolean expression is herb == \"mint\".\n\nThe value \"mint\" makes it true. If the player types eat mint, SecondWord(command) is \"mint\", and that is passed in as herb. == on strings is true only when the two strings are exactly the same, and they are, so the expression is true and HerbHeal returns 2. The program prints Rook eats the mint and heals 2.",
    note: NOTE_TRUE,
    facts: "With eat mint typed, the program prints Rook eats the mint and heals 2. HerbHeal(\"Mint\") is 0, since == is exact. On the quiz, and on the exam about your own code: the first selection statement is the first if in the procedure, not an else if below it, so name its expression and the exact value that makes it true.",
    verify: {
      cases: [
        { run: eatRun("eat mint"), out: "Rook eats the mint and heals 2." },
        { run: `Console.WriteLine(HerbHeal("Mint"));\n${HERB_HEAL}`, out: "0" },
      ],
    },
  },

  // ================================================================ WR8 Practice: The Command
  {
    id: "m2wr8-01", skill: "wr-select", type: "wr",
    source: "2025 exam, Set 1, question 2(a)",
    released: "2025s1-2a",
    labels: PROC,
    listI: HERB_WORD,
    listII: HERB_BRANCH,
    prompt: P_TRUE,
    rows: [
      {
        name: "The Boolean expression and a value that makes it true",
        levels: [
          "Missing, the else if (command == \"help\"), a value that makes it false (Herbs, or herbs mint), or no specific value (\"typing the command\").",
          "Names command == MyFeatureWord() but gives no specific input.",
          "command == MyFeatureWord(), with the input herbs, all lowercase.",
        ],
      },
      {
        name: "Why that value makes it true",
        levels: [
          "Missing, or a reason the code does not give.",
          "\"Because it is the right command,\" with nothing about MyFeatureWord().",
          "MyFeatureWord() returns \"herbs\". When the player types herbs, command is \"herbs\", the two strings are exactly the same, so == gives true and the title is printed.",
        ],
      },
    ],
    model: "The first selection statement is if (command == MyFeatureWord()), so the Boolean expression is command == MyFeatureWord().\n\nThe input herbs makes it true. MyFeatureWord() returns \"herbs\", and when the player types herbs, command is also \"herbs\". == on strings is true when the two strings are exactly the same, letter for letter, so the expression is true and the program prints THE HERB POUCH: every herb the party has picked.",
    note: NOTE_TRUE,
    facts: "With herbs typed, the program prints THE HERB POUCH: every herb the party has picked. With Herbs typed, it prints I don't know that command. Type help. On the quiz, and on the exam about your own code: name the expression in the command's if or else if, give the word exactly as MyFeatureWord() returns it, and say the two strings are equal.",
    verify: {
      cases: [
        { run: branchRun("herbs"), out: HERB_TITLE },
        { run: branchRun("Herbs"), out: "I don't know that command. Type help." },
      ],
    },
  },
  {
    id: "m2wr8-02", skill: "wr-select", type: "wr",
    source: "2025 exam, Set 1, question 2(b)",
    released: "2025s1-2b",
    labels: PROC,
    listI: HERB_WORD,
    listII: HERB_BRANCH,
    prompt: P_PROC,
    rows: [
      {
        name: "A modification inside the procedure that still builds",
        levels: [
          "None, a change that does not build (a missing quotation mark or semicolon), or a change to the chain in Procedure (ii) instead of MyFeatureWord or MyFeatureTitle.",
          "A change too vague to try (\"change the word\").",
          "A specific change inside MyFeatureWord or MyFeatureTitle that builds and runs, like return \"help\"; in place of return \"herbs\";.",
        ],
      },
      {
        name: "How the behavior changes",
        levels: [
          "Missing, or the result described is not what the changed code does.",
          "Says the command would not work, without saying what typing it does now.",
          "Says what the program does now for an input, and what it should do: help prints the herb title instead of the list of commands, and herbs prints I don't know that command. Type help.",
        ],
      },
    ],
    model: "The other programmer could change return \"herbs\"; to return \"help\"; in MyFeatureWord. It still builds and runs, because \"help\" is a string.\n\nNow the first test in the chain is command == \"help\". When the player types help, that test is true, so the program prints THE HERB POUCH: every herb the party has picked instead of the list of commands, and the else if for help can never be reached. When the player types herbs, no test is true, so it prints I don't know that command. Type help. The pouch can no longer be shown at all.",
    note: NOTE_PROC,
    facts: "As written, help prints Commands: w a s d, eat, herbs, help. With return \"help\"; in MyFeatureWord, help prints the herb title and herbs prints I don't know that command. Type help. With return \"Herbs\"; only Herbs with a capital shows the title. On the quiz, and on the exam about your own code: describe one change inside the procedure in Procedure (i) that still builds, such as a different word in MyFeatureWord, and say what typing a command you name does then instead of now.",
    verify: {
      cases: [
        { run: branchRun("help"), out: "Commands: w a s d, eat, herbs, help" },
        { run: `${HERB_BRANCH}\n${typed("help")}\n${HERB_WORD.replace('return "herbs";', 'return "help";')}`, out: HERB_TITLE },
        { run: `${HERB_BRANCH}\n${typed("herbs")}\n${HERB_WORD.replace('return "herbs";', 'return "help";')}`, out: "I don't know that command. Type help." },
        { run: `${HERB_BRANCH}\n${typed("Herbs")}\n${HERB_WORD.replace('return "herbs";', 'return "Herbs";')}`, out: HERB_TITLE },
      ],
    },
  },

  // ================================================================ WR9 Practice: The List
  {
    id: "m2wr9-01", skill: "wr-listuse", type: "wr",
    source: "2026 exam, question 2(c)",
    released: "2026-2c",
    listI: HERB_LIST,
    listII: HERB_LOOP,
    prompt: P_NOLIST,
    rows: [
      {
        name: "How the list manages complexity",
        levels: [
          "Missing, or about lists in general with nothing about pouch.",
          "\"It stores the herbs,\" with nothing about why one list makes the code simpler.",
          "One name, pouch, holds every herb picked, however many, and one loop prints all of them, one per pass, up to pouch.Count.",
        ],
      },
      {
        name: "How List (ii) would change without it, or why it cannot",
        levels: [
          "Missing, \"the list is not used in part (ii),\" or a change that does not fit the code.",
          "Says it would be harder without the list, with nothing about the loop.",
          "Not possible: the number of herbs picked is not known before the game runs. Separate variables (herb1, herb2, herb3) would need a Console.WriteLine each in place of the loop, and could hold only a fixed number.",
        ],
      },
    ],
    model: "The list pouch manages complexity because one name holds every herb the party picks, however many. The loop in List (ii) runs from i = 0 while i < pouch.Count, so the same Console.WriteLine prints every herb.\n\nWithout the list, it is not possible to keep the same behavior. The party can pick any number of herbs, and that number is not known before the game runs. I would need separate variables like herb1, herb2 and herb3, and List (ii) would become one Console.WriteLine for each variable instead of the loop. The fourth herb would have nowhere to go.",
    note: NOTE_NOLIST,
    facts: "The loop prints mint, sage, mint. After Gather(pouch, \"moss\"); it prints four lines with no change to the loop. On the quiz, and on the exam about your own code: say the list holds every entry under one name and one loop shows them all, then say that without it the code would need a variable and a line per entry, which cannot hold a number the game does not know ahead of time.",
    verify: {
      cases: [
        { run: `${HERB_LIST}\n${HERB_LOOP}\n${HERB_GATHER}`, out: "mint\nsage\nmint" },
        { run: `${HERB_LIST}\nGather(pouch, "moss");\n${HERB_LOOP}\n${HERB_GATHER}`, out: "mint\nsage\nmint\nmoss" },
      ],
    },
  },
  {
    id: "m2wr9-02", skill: "wr-listuse", type: "wr",
    source: "2025 exam, Set 2, question 2(b)",
    released: "2025s2-2b",
    listI: HERB_LIST,
    listII: HERB_LOOP,
    prompt: P_LOGIC,
    rows: [
      {
        name: "A modification to List (ii) that still runs",
        levels: [
          "None, a change that does not build (a missing semicolon or brace), or a change to the Gather calls in List (i) instead of the loop.",
          "A change too vague to try (\"change the loop\").",
          "A specific change to the loop that builds and runs, like int i = 1.",
        ],
      },
      {
        name: "Why it is a logic error, consistent with the code",
        levels: [
          "Missing, or the result described is not what the changed code does.",
          "Says the list would print wrong, without saying what comes out.",
          "Says what comes out wrong and why, with what it prints for this pouch.",
        ],
      },
    ],
    model: "The other programmer could change int i = 0 to int i = 1. It still builds and runs, but the loop starts at the second herb, so pouch[0], the first mint, is never printed. The loop prints sage and mint, so the player sees two herbs when the party has picked three.",
    note: NOTE_LOGIC,
    facts: "As written, the loop prints mint, sage, mint. With int i = 1 it prints sage, mint. With pouch[0] in place of pouch[i] it prints mint three times. With i < pouch.Count - 1 it prints mint, sage, and the last herb is lost. With i <= pouch.Count it prints all three, then crashes with an ArgumentOutOfRangeException when i is 3. On the quiz, and on the exam about your own code: change one thing in the List (ii) loop (the start, the condition, or [i]) and say exactly what would print wrong for a list you name.",
    verify: {
      cases: [
        { run: `${HERB_LIST}\n${HERB_LOOP}\n${HERB_GATHER}`, out: "mint\nsage\nmint" },
        { run: `${HERB_LIST}\n${HERB_LOOP.replace("int i = 0", "int i = 1")}\n${HERB_GATHER}`, out: "sage\nmint" },
        { run: `${HERB_LIST}\n${HERB_LOOP.replace("pouch[i]", "pouch[0]")}\n${HERB_GATHER}`, out: "mint\nmint\nmint" },
        { run: `${HERB_LIST}\n${HERB_LOOP.replace("i < pouch.Count", "i < pouch.Count - 1")}\n${HERB_GATHER}`, out: "mint\nsage" },
        { run: `${HERB_LIST}\n${HERB_LOOP.replace("i < pouch.Count", "i <= pouch.Count")}\n${HERB_GATHER}`, out: "mint\nsage\nmint", crash: "ArgumentOutOfRangeException" },
      ],
    },
  },

  // ================================================================ WR10 Practice: MyCount
  {
    id: "m2wr10-01", skill: "wr-count", type: "wr",
    source: "2024 exam, Set 1, question 2(b)",
    released: "2024s1-2b",
    labels: PROC,
    listI: HERB_COUNT,
    listII: HERB_COUNT_II,
    prompt: P_TWOCALLS,
    rows: [
      {
        name: "Two calls with specific arguments that run different code",
        levels: [
          "Missing, calls with no specific arguments, or two calls that run the same code (HerbCount(pouch, \"mint\") and HerbCount(pouch, \"moss\") both run count = count + 1).",
          "Two calls that do run different code, but without saying which code each one runs.",
          "Two calls such as HerbCount(pouch, \"moss\"), which runs count = count + 1 once, and HerbCount(pouch, \"thyme\"), which never runs it.",
        ],
      },
      {
        name: "The expected behavior of each call",
        levels: [
          "Missing, or results the code does not give.",
          "Gives what one call returns, but not the other.",
          "HerbCount(pouch, \"moss\") returns 1, because the if is true once. HerbCount(pouch, \"thyme\") returns 0, because the if is false on every pass.",
        ],
      },
    ],
    model: "First call: HerbCount(pouch, \"moss\"), with pouch holding mint, sage, mint, moss. The loop checks all four herbs. The if is true once, when i is 3, so count = count + 1 runs once and the call returns 1.\n\nSecond call: HerbCount(pouch, \"thyme\"). The loop still checks all four herbs, but the if is false every time, so count = count + 1 never runs and the call returns 0.\n\nThe first call runs the code inside the if, and the second never does.",
    note: NOTE_TWOCALLS,
    facts: "HerbCount(pouch, \"mint\") is 2, HerbCount(pouch, \"moss\") is 1, HerbCount(pouch, \"thyme\") is 0, and HerbCount(new List<string>(), \"mint\") is 0, since the loop body never runs. On the quiz, and on the exam about your own code: write one call to MyCount with a word that is in the list and one with a word that is not, and say which one runs the line that adds 1.",
    verify: {
      cases: [
        { run: `${HERB_COUNT_II}\n${HERB_COUNT}`, out: "mint: 2" },
        { run: `List<string> pouch = new List<string> { "mint", "sage", "mint", "moss" };
Console.WriteLine(HerbCount(pouch, "moss"));
Console.WriteLine(HerbCount(pouch, "thyme"));
Console.WriteLine(HerbCount(new List<string>(), "mint"));
${HERB_COUNT}`, out: "1\n0\n0" },
      ],
    },
  },
  {
    id: "m2wr10-02", skill: "wr-listuse", type: "wr",
    source: "2024 exam, Set 1, question 2(c)",
    released: "2024s1-2c",
    listI: HERB_LIST,
    listII: HERB_COUNT,
    call: HERB_COUNT_CALL,
    prompt: P_VALIDITY,
    rows: [
      {
        name: "Visits every element and passes each one to checkValidity",
        levels: [
          "Missing, checks only one herb, or passes the index i (or the whole list pouch) to checkValidity.",
          "Loops over pouch, but too vague to code: no start or stop, or it is unclear what is passed.",
          "Starts i at 0 and keeps going while i < pouch.Count, calling checkValidity(pouch[i]) on each pass, so each call gets one herb.",
        ],
      },
      {
        name: "Returns the right answer at the right time",
        levels: [
          "Missing, or returns true as soon as one herb is valid.",
          "Returns false for an invalid herb, but does not say when true is returned, or returns true inside the loop.",
          "Returns false as soon as one call gives false, and returns true only after the loop has checked every herb.",
        ],
      },
    ],
    model: "1. Write a procedure AllValid that takes the list pouch.\n2. Set i to 0.\n3. While i is less than pouch.Count, call checkValidity(pouch[i]). This passes one herb, like \"sage\", not the number i.\n4. If that call returns false, stop and return false. One invalid herb is enough.\n5. If it returns true, add 1 to i and go back to step 3.\n6. When the loop ends, every herb has been checked and none was invalid, so return true.",
    note: NOTE_VALIDITY,
    facts: "A C# version of these steps, with a stand-in checkValidity that accepts only mint, sage and moss, gives True for mint, sage, mint. After Gather(pouch, \"rock\"); it gives False. Calling checkValidity(i) instead of checkValidity(pouch[i]) does not build (CS1503): i is an int, and checkValidity here takes a string. On the quiz, and on the exam about your own code: write the steps with the list's own name, a loop to its Count, and checkValidity on each entry, list[i].",
    verify: {
      cases: [
        { run: `${HERB_LIST}\n${HERB_COUNT_CALL}\n${HERB_GATHER}\n${HERB_COUNT}`, out: "mint: 2" },
        { run: `${HERB_LIST}\nConsole.WriteLine(AllValid(pouch));\nGather(pouch, "rock");\nConsole.WriteLine(AllValid(pouch));\n${HERB_GATHER}\n${HERB_ALL_VALID}`, out: "True\nFalse" },
        { run: `${HERB_LIST}\nConsole.WriteLine(AllValid(pouch));\n${HERB_GATHER}\n${HERB_ALL_VALID.replace("checkValidity(pouch[i])", "checkValidity(i)")}`, error: "CS1503" },
      ],
    },
  },

  // ================================================================ WR11 Practice: The Finished Feature
  {
    id: "m2wr11-01", skill: "wr-listuse", type: "wr",
    source: "2026 exam, question 2(c)",
    released: "2026-2c",
    listI: FISH_LIST,
    listII: FISH_REPORT,
    call: FISH_CALL,
    prompt: P_NOLIST,
    rows: [
      {
        name: "How the list manages complexity",
        levels: [
          "Missing, or about lists in general with nothing about catches.",
          "\"It stores the fish,\" with nothing about why one list makes the code simpler.",
          "One name, catches, holds every fish caught, however many, and one loop in FishReport goes over all of them by index up to catches.Count.",
        ],
      },
      {
        name: "How List (ii) would change without it, or why it cannot",
        levels: [
          "Missing, \"the list is not used in part (ii),\" or a change that does not fit the code.",
          "Says it would be harder without the list, with nothing about FishReport.",
          "Not possible: the number of fish caught is not known before the game runs. Separate variables (fish1, fish2, fish3) would hold only a fixed number, and FishReport would need its own if and line for each in place of the loop.",
        ],
      },
    ],
    model: "The list catches manages complexity because one name holds every fish the party catches, however many. FishReport needs only one loop, from i = 0 while i < catches.Count, with the same if for every catch, to show all of them or only one kind.\n\nWithout the list, it is not possible to keep the same behavior. The party can fish as often as it likes, so the number of catches is not known before the game runs. I would need variables like fish1, fish2 and fish3, and FishReport would need a separate if and a separate line for each one instead of the loop, so it could only ever show as many fish as I wrote variables for.",
    note: NOTE_NOLIST,
    facts: "FishReport(catches, \"\") prints ~ trout, ~ eel, ~ trout and Caught: 3. After Hook(catches, \"pike\"); it prints four lines and Caught: 4 with no change to FishReport. On the quiz, and on the exam about your own code: say the list holds every entry under one name and the loop in MyReport goes over all of them, then say why a variable per entry cannot do the same.",
    verify: {
      cases: [
        { run: `${FISH_LIST}\n${FISH_CALL}\n${FISH_HOOK}\n${FISH_REPORT}`, out: "~ trout\n~ eel\n~ trout\nCaught: 3" },
        { run: `${FISH_LIST}\nHook(catches, "pike");\n${FISH_CALL}\n${FISH_HOOK}\n${FISH_REPORT}`, out: "~ trout\n~ eel\n~ trout\n~ pike\nCaught: 4" },
      ],
    },
  },
  {
    id: "m2wr11-02", skill: "wr-report", type: "wr",
    source: "2025 exam, Set 1, question 2(b)",
    released: "2025s1-2b",
    labels: PROC,
    listI: FISH_REPORT,
    listII: FISH_BRANCH,
    prompt: P_PROC,
    rows: [
      {
        name: "A modification inside the procedure that still builds",
        levels: [
          "None, a change that does not build (a missing semicolon or brace), or a change to the call in Procedure (ii) instead of FishReport.",
          "A change too vague to try (\"change the if\").",
          "A specific change inside FishReport that builds and runs, like shown = 1; in place of shown = shown + 1;.",
        ],
      },
      {
        name: "How the behavior changes",
        levels: [
          "Missing, or the result described is not what the changed code does.",
          "Says the report would be wrong, without saying what it shows now.",
          "Says what FishReport gives now for a call, and what it should give.",
        ],
      },
    ],
    model: "The other programmer could change shown = shown + 1; to shown = 1;. It still builds and runs, and every catch is still listed, but shown never goes past 1. When the player types fish, the report lists trout, eel and trout but ends with Caught: 1 instead of Caught: 3. Any report with more than one fish gives the wrong total.",
    note: NOTE_PROC,
    facts: "As written, fish shows three lines and Caught: 3. With shown = 1; it shows the same three lines and Caught: 1. With && in place of ||, fish gives No  caught yet. with an empty name, and fish trout gives No trout caught yet. On the quiz, and on the exam about your own code: describe one change inside MyReport that still builds, and say what a call you name would show then instead of now.",
    verify: {
      cases: [
        { run: fishRun("fish"), out: `${FISH_TITLE}\n~ trout\n~ eel\n~ trout\nCaught: 3` },
        { run: fishRunWith("fish", FISH_REPORT.replace("shown = shown + 1;", "shown = 1;")), out: `${FISH_TITLE}\n~ trout\n~ eel\n~ trout\nCaught: 1` },
        { run: fishRunWith("fish", FISH_REPORT.replace("||", "&&")), out: `${FISH_TITLE}\nNo  caught yet.` },
        { run: fishRunWith("fish trout", FISH_REPORT.replace("||", "&&")), out: `${FISH_TITLE}\nNo trout caught yet.` },
      ],
    },
  },
  {
    id: "m2wr11-03", skill: "wr-select", type: "wr",
    source: "2025 exam, Set 1, question 2(a)",
    released: "2025s1-2a",
    labels: PROC,
    listI: FISH_REPORT,
    listII: FISH_BRANCH,
    prompt: P_TRUE,
    rows: [
      {
        name: "The Boolean expression and a value that makes it true",
        levels: [
          "Missing, the if in Procedure (ii) or a later if in FishReport, a value that makes it false (the three catches in Procedure (ii)), or no specific value.",
          "Names catches.Count == 0 but gives no specific value.",
          "catches.Count == 0, with an empty list as catches, so catches.Count is 0.",
        ],
      },
      {
        name: "Why that value makes it true",
        levels: [
          "Missing, or a reason the code does not give.",
          "\"Because no fish were caught,\" with nothing about Count.",
          "Count is how many fish the list holds. With nothing caught, Count is 0, and 0 == 0 is true, so FishReport returns No fish caught yet. Try the water. before the loop.",
        ],
      },
    ],
    model: "The first selection statement in FishReport is if (catches.Count == 0), so the Boolean expression is catches.Count == 0.\n\nIt is true when catches is an empty list, as at the start of the game before the party catches anything. Then catches.Count is 0, and 0 == 0 is true, so FishReport returns No fish caught yet. Try the water. without running the loop. In Procedure (ii) the list holds three fish, so Count is 3 and the expression is false there.",
    note: NOTE_TRUE,
    facts: "FishReport(new List<string>(), \"\") gives No fish caught yet. Try the water. With the three catches in Procedure (ii), fish shows the three lines and Caught: 3. On the quiz, and on the exam about your own code: name the expression in the first if of MyReport (often entries.Count == 0), give a value that makes it true, such as an empty list, and say why.",
    verify: {
      cases: [
        { run: fishRun("fish"), out: `${FISH_TITLE}\n~ trout\n~ eel\n~ trout\nCaught: 3` },
        { run: `Console.WriteLine(FishReport(new List<string>(), ""));\n${FISH_REPORT}`, out: "No fish caught yet. Try the water." },
      ],
    },
  },

  // ================================================================ WR12 Practice: Practice Written Response
  {
    id: "m2wr12-01", skill: "wr-io", type: "wr",
    source: "2026 exam, question 1",
    released: "2026-q1",
    labels: FILES,
    listI: WISH_LAST_DOC,
    listII: WISH_II,
    prompt: P_DOC,
    rows: [
      {
        name: "A particular piece of documentation",
        levels: [
          "Missing, documentation for the player (the help screen), or \"comments\" with nothing specific.",
          "Names a kind of documentation (\"a comment above the procedure\") without what it says.",
          "Names it and what it says: the two comment lines above LastWishes, which say what it shows and what wishes and howMany are for.",
        ],
      },
      {
        name: "How another programmer uses it on a particular code segment",
        levels: [
          "Missing, or \"it makes the code easier to read\" with no code segment.",
          "Says it helps another programmer, but not with which code or how.",
          "Names the code segment, LastWishes, and how the comments help: howMany is how many of the newest wishes to show, not an index, so another programmer can write LastWishes(wishes, 2) without working through the loop's start.",
        ],
      },
    ],
    model: "One piece of documentation is the two comment lines above LastWishes. The first line says what it does: it shows the newest wishes, oldest of them first. The second line says what each parameter is for: wishes is every wish made so far, and howMany is how many of the newest wishes to show.\n\nThe loop starts at wishes.Count - howMany, which is hard to read at a glance. Another programmer who reads the comment knows that LastWishes(wishes, 2) shows the last two wishes, without working out where the loop starts. It also tells them howMany is a number of wishes, not an index in the list.",
    note: NOTE_DOC,
    facts: "LastWishes(wishes, 2) prints * health, * gold and Wishes made: 4. About your own code on the quiz: name the two comment lines above the procedure on your Personalized Project Reference, quote what they say, and say how they help someone call or change that procedure.",
    verify: {
      cases: [
        { run: `${WISH_II}\n${WISH_LAST_DOC}`, out: WISH_OUT },
      ],
    },
  },
  {
    id: "m2wr12-02", skill: "wr-report", type: "wr",
    source: "2026 exam, question 2(a)",
    released: "2026-2a",
    labels: PROC,
    listI: WISH_LAST,
    listII: WISH_II,
    prompt: P_ALGO,
    rows: [
      {
        name: "The variables that decide when it stops",
        levels: [
          "Missing, or names only howMany or report, which do not stop the loop.",
          "Names only one of the two: i, or wishes.Count.",
          "i and wishes.Count, the two sides of the condition i < wishes.Count. (howMany only decides where i starts.)",
        ],
      },
      {
        name: "Values that stop it, and why",
        levels: [
          "Missing, or values that would not stop it (i is 3).",
          "Gives values with no reason, or a reason with no values.",
          "For this call wishes.Count is 4 and i starts at 4 - 2, which is 2. After two passes i becomes 4, 4 < 4 is false, and the loop stops.",
        ],
      },
    ],
    model: "The first iteration statement is the for loop in LastWishes. The variables that decide when it stops are i and wishes.Count, because the loop runs only while i < wishes.Count.\n\nIn the call LastWishes(wishes, 2), wishes.Count is 4, so i starts at 4 - 2, which is 2. The loop adds health when i is 2 and gold when i is 3. Then i becomes 4, and 4 < 4 is false, so the loop stops after exactly two passes.",
    note: NOTE_ALGO,
    facts: "LastWishes(wishes, 2) prints * health, * gold and Wishes made: 4. A copy that prints i after the loop shows it stopped with i = 4 and wishes.Count = 4. About your own code on the quiz: name the variables in the condition of the first loop in your Procedure section, give their values for a real call, and say why the condition is then false.",
    verify: {
      cases: [
        { run: `${WISH_II}\n${WISH_LAST}`, out: WISH_OUT },
        { run: `List<string> wishes = new List<string> { "gold", "luck", "health", "gold" };
int howMany = 2;
int i = 0;
for (i = wishes.Count - howMany; i < wishes.Count; i++)
{
}
Console.WriteLine("stopped with i = " + i + " and wishes.Count = " + wishes.Count);`, out: "stopped with i = 4 and wishes.Count = 4" },
      ],
    },
  },
  {
    id: "m2wr12-03", skill: "wr-report", type: "wr",
    source: "2026 exam, question 2(b)",
    released: "2026-2b",
    labels: PROC,
    listI: WISH_LAST,
    listII: WISH_II,
    prompt: P_BADCALL,
    rows: [
      {
        name: "A specific call the procedure accepts",
        levels: [
          "Missing, a call with no specific arguments (\"a big number\"), or a call that does not build (LastWishes(wishes, \"two\")).",
          "A call that builds, but one that LastWishes handles correctly, like LastWishes(wishes, 3).",
          "A call with specific arguments that builds and runs, like LastWishes(wishes, 6) with four wishes in the list.",
        ],
      },
      {
        name: "The incorrect behavior, and why it happens",
        levels: [
          "Missing, or a result the code does not give.",
          "\"It crashes,\" with nothing about when or why.",
          "It crashes with an ArgumentOutOfRangeException: i starts at 4 - 6, which is -2, and wishes[-2] is not in the list. Nothing checks that howMany is no more than wishes.Count.",
        ],
      },
    ],
    model: "A call that LastWishes accepts but handles badly is LastWishes(wishes, 6), when wishes holds four wishes. 6 is an int, so the call builds.\n\nThe program crashes with an ArgumentOutOfRangeException instead of showing the four wishes there are. The loop starts i at wishes.Count - howMany, which is 4 - 6, or -2. -2 < 4 is true, so the loop runs and reads wishes[-2], and there is no index -2 in a list. LastWishes never checks that howMany is at most wishes.Count.",
    note: NOTE_BADCALL,
    facts: "LastWishes(wishes, 2) prints * health, * gold and Wishes made: 4. LastWishes(wishes, 6) crashes with an ArgumentOutOfRangeException. LastWishes(wishes, -1) starts i at 5, never runs the loop, and prints only Wishes made: 4. About your own code on the quiz: write a call to the procedure on your Personalized Project Reference with exact arguments it accepts but handles badly, and say what goes wrong and which line causes it; if every accepted call works, say why.",
    verify: {
      cases: [
        { run: `${WISH_II}\n${WISH_LAST}`, out: WISH_OUT },
        { run: `List<string> wishes = new List<string> { "gold", "luck", "health", "gold" };
Console.WriteLine(LastWishes(wishes, -1));
${WISH_LAST}`, out: "Wishes made: 4" },
        { run: `List<string> wishes = new List<string> { "gold", "luck", "health", "gold" };
Console.WriteLine(LastWishes(wishes, 6));
${WISH_LAST}`, crash: "ArgumentOutOfRangeException" },
      ],
    },
  },
  {
    id: "m2wr12-04", skill: "wr-listuse", type: "wr",
    source: "2026 exam, question 2(c)",
    released: "2026-2c",
    listI: WISH_LIST,
    listII: WISH_LAST,
    call: WISH_CALL,
    prompt: P_NOLIST,
    rows: [
      {
        name: "How the list manages complexity",
        levels: [
          "Missing, or about lists in general with nothing about wishes.",
          "\"It stores the wishes,\" with nothing about why one list makes the code simpler.",
          "One name, wishes, holds every wish in the order made, however many, so LastWishes can find the newest ones by index from wishes.Count.",
        ],
      },
      {
        name: "How List (ii) would change without it, or why it cannot",
        levels: [
          "Missing, \"the list is not used in part (ii),\" or a change that does not fit the code.",
          "Says it would be harder without the list, with nothing about LastWishes.",
          "Not possible: the number of wishes is not known before the game runs, and LastWishes needs the newest ones by position. Separate variables (wish1, wish2, wish3) would hold only a fixed number, and LastWishes would need an if for every possible howMany.",
        ],
      },
    ],
    model: "The list wishes manages complexity because one name holds every wish, in the order made, however many there are. LastWishes uses wishes.Count to find where the newest wishes start, and one loop adds each of them to the report.\n\nWithout the list, it is not possible to keep the same behavior. The number of wishes is not known before the game runs. With separate variables like wish1, wish2 and wish3, LastWishes would need to know which variable was filled last and would need a separate if for each value of howMany. It could also only remember as many wishes as I wrote variables for.",
    note: NOTE_NOLIST,
    facts: "LastWishes(wishes, 2) prints * health, * gold and Wishes made: 4. After Wish(wishes, \"luck\"); the same call prints * gold, * luck and Wishes made: 5. About your own code on the quiz: say how your list holds every entry under one name for the code in your List (ii), then how that code would change without it, or why it could not.",
    verify: {
      cases: [
        { run: `${WISH_LIST}\n${WISH_CALL}\n${WISH_MAKE}\n${WISH_LAST}`, out: WISH_OUT },
        { run: `${WISH_LIST}\nWish(wishes, "luck");\n${WISH_CALL}\n${WISH_MAKE}\n${WISH_LAST}`, out: "* gold\n* luck\nWishes made: 5" },
      ],
    },
  },
];

const form = (n) => items.filter((it) => it.id.startsWith(`m2wr${n}-`));

export default {
  items,
  forms: [
    { id: "m2wr7", name: "WR7 Practice: The Command Chain", items: form(7) },
    { id: "m2wr8", name: "WR8 Practice: The Command", items: form(8) },
    { id: "m2wr9", name: "WR9 Practice: The List", items: form(9) },
    { id: "m2wr10", name: "WR10 Practice: MyCount", items: form(10) },
    { id: "m2wr11", name: "WR11 Practice: The Finished Feature", items: form(11) },
    { id: "m2wr12", name: "WR12 Practice: Practice Written Response", items: form(12) },
  ],
};

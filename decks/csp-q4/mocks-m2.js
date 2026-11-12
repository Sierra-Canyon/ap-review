// AP CSP · Milestone 2 written responses · practice forms for WR7 to WR12
// Same item shape as decks/csp-q4/review-m2.js. Every block of code here is checked on .NET 10 by tools/verify.mjs.
// Each form uses the released prompts of the real Form A, in the same order, on a sample feature that is in no review item:
// the Herb Pouch (WR7 to WR10, built up day by day), the Fishing Log (WR11) and the Wishing Well (WR12).
// An item's feedback ends (in facts) with one sentence on answering the same prompt about the student's own feature.

// ---------------------------------------------------------------- the released prompts, word for word
const P_INPUT = "Programs accept input to achieve their intended functionality. Describe at least one valid input to your program and what your program does with that input.";
const P_INVALID = "Identify an unexpected or invalid input that a user could provide to your program. Describe the behavior of your program after it receives this input. If it is not possible for your program to accept an unexpected or invalid input, explain why this is the case.";
const P_DOC = "Describe one piece of documentation that would be appropriate to include with or in your program. Explain how this documentation can be used by another programmer to better understand a particular code segment in your program.";
const P_TRUE = "Consider the first selection statement included in the Procedure section of your Personalized Project Reference. Identify the Boolean expression in this selection statement. Identify a specific value or set of values that will cause this expression to evaluate to true. Explain why the specified value(s) will cause the expression to evaluate to true.";
const P_NOLIST = "Consider the list included in part (i) of the List section of your Personalized Project Reference. Explain how the list uses abstraction to manage complexity in your program. Suppose the list was not included in your program. Describe how you would need to adjust the code segment in part (ii) of the List section of your Personalized Project Reference so that it has the same behavior. If it is not possible to have the same behavior without the use of the list, explain why.";
const P_GROWS = "Consider the list included in the List section of your Personalized Project Reference. Suppose another programmer adds several new elements to the end of the list. Explain how the code segment in part (ii) of the List section would need to be modified to account for the additional elements. If no changes to the code segment are necessary, explain why this is the case for your program.";
const P_PARAMS = "Consider the procedure identified in part (i) of the Procedure section of your Personalized Project Reference. Identify the parameter(s) used in this procedure. Explain how your identified parameter(s) use abstraction to manage complexity in your program.";
const P_ALGO = "Consider the first iteration statement in the Procedure section of your Personalized Project Reference. Identify the variable(s) that determine when the iteration statement stops iterating. Identify specific values for the variable(s) that will cause the iteration statement to stop. Explain why these value(s) would cause the iteration statement to stop. If there are no such variable(s) or specific value(s), explain how the iteration statement stops.";
const P_BADCALL = "Consider the procedure included in part (i) of the Procedure section of your Personalized Project Reference. Another programmer is planning to use your procedure in a different program and wants to write some test cases to check whether it will work. Write a procedure call with specific argument(s) that your procedure will accept but will cause your procedure to behave incorrectly. Describe the incorrect behavior. Explain why the incorrect behavior occurs as a result of this call. If it is not possible for a call with accepted arguments to cause your procedure to behave incorrectly, explain why this is the case for your procedure.";

const PROC = ["Procedure (i)", "Procedure (ii)"];
const FILES = ["MyFeature.cs", "Program.cs"];

const NOTE_INPUT = "One point, earned or not, as on the exam: a specific valid input and what the program really does with it. \"The player types a command and the program answers\" names no input and earns nothing.";
const NOTE_INVALID = "One point, earned or not, as on the exam: a specific unexpected or invalid input and what the program really does after it. A valid input earns nothing, and so does \"the program crashes\" when it does not.";
const NOTE_DOC = "One point, earned or not, as on the exam: a particular piece of documentation and a particular code segment it helps another programmer understand. Help for the player, or \"comments make code easier to read\", earns nothing.";
const NOTE_TRUE = "One point, earned or not, as on the exam: the Boolean expression of the first selection statement, a specific value that makes it true, and why. A value that makes it false, or no specific value, earns nothing.";
const NOTE_NOLIST = "One point, earned or not, as on the exam, and only when both halves are there. \"The list is not used in part (ii)\" earns nothing.";
const NOTE_GROWS = "One point, earned or not, as on the exam. \"No change is needed\" with no reason earns nothing, and so does a change that is not needed.";
const NOTE_PARAMS = "One point, earned or not, as on the exam. Naming an argument from a call instead of a parameter earns nothing, and so does explaining how the list manages complexity instead of the parameters.";
const NOTE_ALGO = "One point, earned or not, as on the exam, and only when both halves are there: the variables, and values for them with the reason they stop the loop.";
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
const fishRun = (t) => `${FISH_BRANCH}\n${typed(t)}\n${WORDS}\n${FISH_WORD}\n${FISH_REPORT}`;
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
    id: "m2wr7-01", skill: "wr-io", type: "wr",
    source: "2024 exam, Set 1, question 1",
    labels: PROC,
    listI: HERB_HEAL,
    listII: HERB_EAT,
    prompt: P_INPUT,
    rows: [
      {
        name: "A specific valid input",
        levels: [
          "Missing, no specific input (\"the player types eat\"), or an input the program does not accept, like heal mint.",
          "Names the command eat, but not what is typed with it.",
          "A whole input the program accepts, word for word, such as eat sage or eat mint.",
        ],
      },
      {
        name: "What the program does with it",
        levels: [
          "Missing, or a behavior the code does not have (\"the herb is taken out of the pouch\").",
          "\"Rook heals,\" with nothing about how much or why.",
          "Follows the input through the code: FirstWord is eat, HerbHeal(\"sage\") returns 3, and the program prints Rook eats the sage and heals 3.",
        ],
      },
    ],
    model: "One valid input is eat sage.\n\nFirstWord(command) is eat, so the if is true. SecondWord(command) is sage, so the program calls HerbHeal(\"sage\"). In HerbHeal, herb == \"mint\" is false and herb == \"sage\" is true, so it returns 3. healed is 3, and the program prints Rook eats the sage and heals 3.",
    note: NOTE_INPUT,
    facts: "With eat sage typed, the program prints Rook eats the sage and heals 3. With eat mint, it heals 2. With eat rock, HerbHeal reaches the else and the line says heals 0. With jump, it prints I don't know that command. Type help. About the game on the quiz: give one real command, such as d or lead Mote, and say exactly what the game does with it.",
    verify: {
      cases: [
        { run: eatRun("eat sage"), out: "Rook eats the sage and heals 3." },
        { run: eatRun("eat mint"), out: "Rook eats the mint and heals 2." },
        { run: eatRun("eat rock"), out: "Rook eats the rock and heals 0." },
        { run: eatRun("jump"), out: "I don't know that command. Type help." },
      ],
    },
  },
  {
    id: "m2wr7-02", skill: "wr-select", type: "wr",
    source: "2025 exam, Set 1, question 2(a)",
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
    facts: "With eat mint typed, the program prints Rook eats the mint and heals 2. HerbHeal(\"Mint\") is 0, since == is exact. About the game on the quiz: the first selection statement is the first if in the procedure, not the else if, so name its expression and the exact command that makes it true.",
    verify: {
      cases: [
        { run: eatRun("eat mint"), out: "Rook eats the mint and heals 2." },
        { run: `Console.WriteLine(HerbHeal("Mint"));\n${HERB_HEAL}`, out: "0" },
      ],
    },
  },

  // ================================================================ WR8 Practice: Your Command
  {
    id: "m2wr8-01", skill: "wr-select", type: "wr",
    source: "2025 exam, Set 1, question 2(a)",
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
    facts: "With herbs typed, the program prints THE HERB POUCH: every herb the party has picked. With Herbs typed, it prints I don't know that command. Type help. About your own feature: name the expression in your else if, give your word exactly as your MyFeatureWord() returns it, and say the two strings are equal.",
    verify: {
      cases: [
        { run: branchRun("herbs"), out: HERB_TITLE },
        { run: branchRun("Herbs"), out: "I don't know that command. Type help." },
      ],
    },
  },
  {
    id: "m2wr8-02", skill: "wr-io", type: "wr",
    source: "2025 exam, Set 2, question 1",
    labels: FILES,
    listI: HERB_WORD,
    listII: HERB_BRANCH,
    prompt: P_INVALID,
    rows: [
      {
        name: "A specific unexpected or invalid input",
        levels: [
          "Missing, no specific input, or a valid input like herbs or help.",
          "Describes a kind of input (\"a typo\") without the exact text.",
          "An exact input the program does not expect, such as Herbs with a capital H, herbs mint, or jump.",
        ],
      },
      {
        name: "What the program does after it",
        levels: [
          "Missing, or a behavior the code does not have (\"the game crashes\").",
          "\"It does not work,\" with nothing about what is printed.",
          "What really happens: \"Herbs\" is not exactly \"herbs\" and not \"help\", so both tests are false and the else prints I don't know that command. Type help.",
        ],
      },
    ],
    model: "An unexpected input is Herbs, with a capital H.\n\nThe first test compares command with MyFeatureWord(), which is \"herbs\". == on strings is exact, and \"Herbs\" has a capital letter, so the test is false. \"Herbs\" is not \"help\" either, so the else runs and the program prints I don't know that command. Type help. Nothing crashes, and the title is not printed.",
    note: NOTE_INVALID,
    facts: "Herbs, herbs mint and jump all print I don't know that command. Type help. on this code, because the whole command is compared. About your own feature: give your word with a capital letter, or with a second word, and say exactly what your game prints.",
    verify: {
      cases: [
        { run: branchRun("Herbs"), out: "I don't know that command. Type help." },
        { run: branchRun("herbs mint"), out: "I don't know that command. Type help." },
        { run: branchRun("jump"), out: "I don't know that command. Type help." },
      ],
    },
  },

  // ================================================================ WR9 Practice: Your List
  {
    id: "m2wr9-01", skill: "wr-listuse", type: "wr",
    source: "2026 exam, question 2(c)",
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
    facts: "The loop prints mint, sage, mint. After Gather(pouch, \"moss\"); it prints four lines with no change to the loop. About your own feature: say your list holds every entry under one name and one loop shows them all, then say that without it you would need a variable and a line per entry, which cannot hold a number the game does not know ahead of time.",
    verify: {
      cases: [
        { run: `${HERB_LIST}\n${HERB_LOOP}\n${HERB_GATHER}`, out: "mint\nsage\nmint" },
        { run: `${HERB_LIST}\nGather(pouch, "moss");\n${HERB_LOOP}\n${HERB_GATHER}`, out: "mint\nsage\nmint\nmoss" },
      ],
    },
  },
  {
    id: "m2wr9-02", skill: "wr-listuse", type: "wr",
    source: "2025 exam, Set 1, question 2(c)",
    listI: HERB_LIST,
    listII: HERB_LOOP,
    prompt: P_GROWS,
    rows: [
      {
        name: "What List (ii) does with the new elements",
        levels: [
          "Missing, or says a new Console.WriteLine is needed for each new herb.",
          "\"No change is needed,\" with nothing about what happens to the new herbs.",
          "No change is needed: the loop prints the new herbs too, after the old ones.",
        ],
      },
      {
        name: "Why, from the code",
        levels: [
          "Missing, or a reason that is not about the loop.",
          "Vague: \"the loop goes through the list.\"",
          "The loop runs while i < pouch.Count. Count grows when herbs are added, so the loop gets one more pass for each new herb, with no number in the code to change.",
        ],
      },
    ],
    model: "No change to the loop is needed. It runs while i < pouch.Count, and pouch.Count is how many herbs are in the pouch right now. If another programmer adds moss and sage to the end, pouch.Count goes from 3 to 5, so the loop makes 5 passes and prints the two new herbs after the first three.",
    note: NOTE_GROWS,
    facts: "The loop prints mint, sage, mint. After Gather(pouch, \"moss\"); Gather(pouch, \"sage\"); it prints five lines with no change. About your own feature: point at the condition in your own loop, i < yourList.Count, and say Count grows with the list; if you typed a number in place of Count, say that number must change.",
    verify: {
      cases: [
        { run: `${HERB_LIST}\n${HERB_LOOP}\n${HERB_GATHER}`, out: "mint\nsage\nmint" },
        { run: `${HERB_LIST}\nGather(pouch, "moss");\nGather(pouch, "sage");\n${HERB_LOOP}\n${HERB_GATHER}`, out: "mint\nsage\nmint\nmoss\nsage" },
      ],
    },
  },

  // ================================================================ WR10 Practice: Your MyCount
  {
    id: "m2wr10-01", skill: "wr-count", type: "wr",
    source: "2024 exam, Set 2, question 2(c)",
    labels: PROC,
    listI: HERB_COUNT,
    listII: HERB_COUNT_II,
    prompt: P_PARAMS,
    rows: [
      {
        name: "The parameters, from the procedure header",
        levels: [
          "Missing, or names the argument \"mint\", or the variable count, instead of the parameters.",
          "Names one of pouch and herb, but not both, or mixes in an argument.",
          "pouch and herb, from the header HerbCount(List<string> pouch, string herb).",
        ],
      },
      {
        name: "How the parameters manage complexity",
        levels: [
          "Missing, or explains how the list manages complexity instead of the parameters.",
          "Vague: \"it makes the code reusable,\" with nothing about what herb changes.",
          "One procedure counts any herb: the value passed in as herb is what the if compares with, so HerbCount(pouch, \"mint\") and HerbCount(pouch, \"moss\") use the same loop. Without herb, there would be one procedure per herb.",
        ],
      },
    ],
    model: "The parameters are pouch and herb, in the header int HerbCount(List<string> pouch, string herb).\n\nherb lets one procedure count any herb. The value passed in as herb is what the if compares each entry with, so HerbCount(pouch, \"mint\") gives 2 and HerbCount(pouch, \"moss\") gives 1, with the same code. Without herb, I would need CountMint, CountSage and CountMoss, each with its own copy of the loop. pouch lets the procedure count in whatever list is passed in.",
    note: NOTE_PARAMS,
    facts: "The line prints mint: 2. HerbCount(pouch, \"moss\") is 1 and HerbCount(pouch, \"thyme\") is 0. About your own feature: name entries and word from your MyCount header, and say word lets one procedure count anything in your list.",
    verify: {
      cases: [
        { run: `${HERB_COUNT_II}\n${HERB_COUNT}`, out: "mint: 2" },
        { run: `List<string> pouch = new List<string> { "mint", "sage", "mint", "moss" };
Console.WriteLine(HerbCount(pouch, "moss"));
Console.WriteLine(HerbCount(pouch, "thyme"));
${HERB_COUNT}`, out: "1\n0" },
      ],
    },
  },
  {
    id: "m2wr10-02", skill: "wr-count", type: "wr",
    source: "2026 exam, question 2(a)",
    labels: PROC,
    listI: HERB_COUNT,
    listII: HERB_COUNT_II,
    prompt: P_ALGO,
    rows: [
      {
        name: "The variables that decide when it stops",
        levels: [
          "Missing, or names something that does not stop the loop: herb or count.",
          "Names only one of the two: i, or pouch.Count.",
          "i and pouch.Count, the two sides of the condition i < pouch.Count.",
        ],
      },
      {
        name: "Values that stop it, and why",
        levels: [
          "Missing, values that would not stop it, or \"it stops when it finds mint\" (it checks every herb).",
          "Gives values with no reason, or a reason with no values.",
          "For this call pouch.Count is 4, so when i becomes 4, 4 < 4 is false and the loop ends after the moss is checked.",
        ],
      },
    ],
    model: "The first iteration statement is the for loop in HerbCount. The variables that decide when it stops are i and pouch.Count, because the loop keeps going only while i < pouch.Count.\n\nIn the call in Procedure (ii), pouch holds mint, sage, mint, moss, so pouch.Count is 4. i starts at 0 and goes up by 1 after each pass. After the pass for moss, i becomes 4. Then 4 < 4 is false, so the loop stops, and HerbCount returns 2.",
    note: NOTE_ALGO,
    facts: "The line prints mint: 2. A copy that prints i after the loop shows it stopped with i = 4 and pouch.Count = 4. About your own feature: name i and entries.Count from the loop in your MyCount, give a list with a known Count, and say i equal to that Count makes the condition false.",
    verify: {
      cases: [
        { run: `${HERB_COUNT_II}\n${HERB_COUNT}`, out: "mint: 2" },
        { run: `List<string> pouch = new List<string> { "mint", "sage", "mint", "moss" };
int i = 0;
for (i = 0; i < pouch.Count; i++)
{
}
Console.WriteLine("stopped with i = " + i + " and pouch.Count = " + pouch.Count);`, out: "stopped with i = 4 and pouch.Count = 4" },
      ],
    },
  },

  // ================================================================ WR11 Practice: Your Own Code
  {
    id: "m2wr11-01", skill: "wr-report", type: "wr",
    source: "2024 exam, Set 2, question 2(c)",
    labels: PROC,
    listI: FISH_REPORT,
    listII: FISH_BRANCH,
    prompt: P_PARAMS,
    rows: [
      {
        name: "The parameters, from the procedure header",
        levels: [
          "Missing, or names arguments (catches as passed in, or SecondWord(command)) or the variables report and shown instead of the parameters.",
          "Names one of catches and fish, but not both, or mixes in an argument.",
          "catches and fish, from the header FishReport(List<string> catches, string fish).",
        ],
      },
      {
        name: "How the parameters manage complexity",
        levels: [
          "Missing, or explains how the list manages complexity instead of the parameters.",
          "Vague: \"it makes the code reusable,\" with nothing about what fish changes.",
          "One procedure makes every report: fish is \"\" for the whole log or a name for just that fish, so the same loop and if give both, with no separate procedure for each kind of fish.",
        ],
      },
    ],
    model: "The parameters are catches and fish, in the header string FishReport(List<string> catches, string fish).\n\nfish lets one procedure make every report. When the player types fish, SecondWord gives \"\", the if inside the loop is true for every catch, and all three are shown. When the player types fish trout, fish is \"trout\", and the same if is true only for trout. Without fish, I would need one procedure for the whole log and another for each kind of fish, each with its own copy of the loop. catches lets the same procedure report on whatever list is passed in.",
    note: NOTE_PARAMS,
    facts: "With fish typed, the program prints the title, then ~ trout, ~ eel, ~ trout and Caught: 3. With fish trout, it prints the title, two trout lines and Caught: 2. About your own feature: name entries and filter from your MyReport header (not the list or SecondWord(command) from your call), and say filter lets one procedure show your whole list or only one word.",
    verify: {
      cases: [
        { run: fishRun("fish"), out: `${FISH_TITLE}\n~ trout\n~ eel\n~ trout\nCaught: 3` },
        { run: fishRun("fish trout"), out: `${FISH_TITLE}\n~ trout\n~ trout\nCaught: 2` },
      ],
    },
  },
  {
    id: "m2wr11-02", skill: "wr-listuse", type: "wr",
    source: "2026 exam, question 2(c)",
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
    facts: "FishReport(catches, \"\") prints ~ trout, ~ eel, ~ trout and Caught: 3. After Hook(catches, \"pike\"); it prints four lines and Caught: 4 with no change to FishReport. About your own feature: say your list holds every entry under one name and the loop in your MyReport goes over all of them, then say why a variable per entry cannot do the same.",
    verify: {
      cases: [
        { run: `${FISH_LIST}\n${FISH_CALL}\n${FISH_HOOK}\n${FISH_REPORT}`, out: "~ trout\n~ eel\n~ trout\nCaught: 3" },
        { run: `${FISH_LIST}\nHook(catches, "pike");\n${FISH_CALL}\n${FISH_HOOK}\n${FISH_REPORT}`, out: "~ trout\n~ eel\n~ trout\n~ pike\nCaught: 4" },
      ],
    },
  },
  {
    id: "m2wr11-03", skill: "wr-io", type: "wr",
    source: "2025 exam, Set 2, question 1",
    labels: FILES,
    listI: `${FISH_WORD}\n\n${FISH_REPORT}`,
    listII: FISH_BRANCH,
    prompt: P_INVALID,
    rows: [
      {
        name: "A specific unexpected or invalid input",
        levels: [
          "Missing, no specific input, or a valid input like fish or fish trout.",
          "Describes a kind of input (\"a fish that is not there\") without the exact text.",
          "An exact input the program does not expect, such as fish shark, Fish with a capital F, or jump.",
        ],
      },
      {
        name: "What the program does after it",
        levels: [
          "Missing, or a behavior the code does not have (\"the game crashes\").",
          "\"It says there are none,\" with nothing about what is printed or why.",
          "What really happens: for fish shark, the title prints, the loop finds no shark, shown stays 0, and FishReport returns No shark caught yet.",
        ],
      },
    ],
    model: "An unexpected input is fish shark. No shark has been caught, and the game has no sharks.\n\nFirstWord is fish, so the if is true and the title prints. Then FishReport(catches, \"shark\") runs. The list is not empty, so the loop checks all three catches, but none of them is \"shark\", so shown stays 0. The if after the loop is true, and FishReport returns No shark caught yet. The game prints that line, and nothing crashes.",
    note: NOTE_INVALID,
    facts: "With fish shark typed, the program prints the title and No shark caught yet. With Fish typed, it prints I don't know that command. Type help. With jump, it prints the same. About your own feature: give your word with a second word that is not in your list (or your word with a capital letter) and say exactly what your MyReport or your game prints.",
    verify: {
      cases: [
        { run: fishRun("fish shark"), out: `${FISH_TITLE}\nNo shark caught yet.` },
        { run: fishRun("Fish"), out: "I don't know that command. Type help." },
        { run: fishRun("jump"), out: "I don't know that command. Type help." },
      ],
    },
  },

  // ================================================================ WR12 Practice: Practice Written Response
  {
    id: "m2wr12-01", skill: "wr-io", type: "wr",
    source: "2026 exam, question 1",
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
    { id: "m2wr8", name: "WR8 Practice: Your Command", items: form(8) },
    { id: "m2wr9", name: "WR9 Practice: Your List", items: form(9) },
    { id: "m2wr10", name: "WR10 Practice: Your MyCount", items: form(10) },
    { id: "m2wr11", name: "WR11 Practice: Your Own Code", items: form(11) },
    { id: "m2wr12", name: "WR12 Practice: Practice Written Response", items: form(12) },
  ],
};

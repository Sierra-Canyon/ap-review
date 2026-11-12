// AP CSP · Milestone 2 written responses (WR7 to WR12) · review items
// Same shape as decks/csp-q4/review-wr.js. Every block of code here is checked on .NET 10 by tools/verify.mjs:
// each item's first case runs the code exactly as students see it, with any procedure it calls that is not shown.
// Three sample features, none of them the class's Bestiary or Loot Log: a Shop Ledger (shop), a Bounty Board (bounties)
// and a Relic Shelf (relics). Each has a command in an else if chain, a list added to with a MyRecord-style call,
// a MyCount-style counting procedure and a MyReport-style report with a loop.
// An item's feedback ends (in facts) with one sentence on answering the same prompt on the quiz and about the student's own code.
// released: the released prompt, as year, set and part ("2024s1-2b", "2026-q1"); the field prompt already holds the prompt's text.

// ---------------------------------------------------------------- the released prompts, word for word
const P_INPUT = "Programs accept input to achieve their intended functionality. Describe at least one valid input to your program and what your program does with that input.";
const P_INVALID = "Identify an unexpected or invalid input that a user could provide to your program. Describe the behavior of your program after it receives this input. If it is not possible for your program to accept an unexpected or invalid input, explain why this is the case.";
const P_OUTPUT = "Identify an example output of your program. Explain how this output shows an aspect of your program's functionality.";
const P_DOC = "Describe one piece of documentation that would be appropriate to include with or in your program. Explain how this documentation can be used by another programmer to better understand a particular code segment in your program.";
const P_TRUE = "Consider the first selection statement included in the Procedure section of your Personalized Project Reference. Identify the Boolean expression in this selection statement. Identify a specific value or set of values that will cause this expression to evaluate to true. Explain why the specified value(s) will cause the expression to evaluate to true.";
const P_FALSE = "Consider the first selection statement included in the Procedure section of your Personalized Project Reference. Identify the Boolean expression in this selection statement. Identify a specific value or set of values that will cause this expression to evaluate to false. Explain why the specified value(s) will cause the expression to evaluate to false.";
const P_NOLIST = "Consider the list included in part (i) of the List section of your Personalized Project Reference. Explain how the list uses abstraction to manage complexity in your program. Suppose the list was not included in your program. Describe how you would need to adjust the code segment in part (ii) of the List section of your Personalized Project Reference so that it has the same behavior. If it is not possible to have the same behavior without the use of the list, explain why.";
const P_GROWS = "Consider the list included in the List section of your Personalized Project Reference. Suppose another programmer adds several new elements to the end of the list. Explain how the code segment in part (ii) of the List section would need to be modified to account for the additional elements. If no changes to the code segment are necessary, explain why this is the case for your program.";
const P_LOGIC = "Consider the code segment in part (ii) of the List section of your Personalized Project Reference. Suppose another programmer modifies this code segment. Describe a modification the other programmer could make to this code segment that would result in a logic error. Explain why this modification would result in a logic error.";
const P_VALIDITY = "Suppose another programmer provides you with a procedure called checkValidity(value) that returns true if a value passed as an argument is considered valid by the other programmer and returns false otherwise. Using the list identified in the List section of your Personalized Project Reference, explain in detailed steps an algorithm that uses checkValidity to check whether all elements in your list are considered valid by the other programmer. Your explanation must be detailed enough for someone else to write the program code for the algorithm that uses checkValidity.";
const P_PARAMS = "Consider the procedure identified in part (i) of the Procedure section of your Personalized Project Reference. Identify the parameter(s) used in this procedure. Explain how your identified parameter(s) use abstraction to manage complexity in your program.";
const P_ALGO = "Consider the first iteration statement in the Procedure section of your Personalized Project Reference. Identify the variable(s) that determine when the iteration statement stops iterating. Identify specific values for the variable(s) that will cause the iteration statement to stop. Explain why these value(s) would cause the iteration statement to stop. If there are no such variable(s) or specific value(s), explain how the iteration statement stops.";
const P_TWOCALLS = "Consider the procedure identified in part (i) of the Procedure section of your Personalized Project Reference. Write two calls to your procedure that each cause a different code segment in the procedure to execute. Describe the expected behavior of each call. If it is not possible for two calls to your procedure to cause different code segments to execute, explain why this is the case for your procedure.";
const P_PROC = "Consider the procedure included in part (i) of the Procedure section of your Personalized Project Reference. Suppose another programmer modifies the code within this procedure. Describe a modification the other programmer could make that would cause this procedure to have a logic error. Describe how the behavior of this procedure would change because of the error.";
const P_MAINTAIN = "Consider the procedure identified in part (i) of the Procedure section of your Personalized Project Reference. Describe the functionality provided by this procedure. Explain how implementing this functionality as a procedure results in your program being easier to maintain than if the functionality were not implemented as a procedure.";
const P_CALLS = "Consider the procedure and procedure call identified in parts (i) and (ii) of the Procedure section of your Personalized Project Reference. Describe the outcome that your procedure call is intended to produce. Write a new procedure call with at least one different argument value that will produce the same outcome, if possible, and explain why this procedure call produces the same outcome. If it is not possible to write a new procedure call that produces the same outcome, explain why this is not possible.";
const P_BADCALL = "Consider the procedure included in part (i) of the Procedure section of your Personalized Project Reference. Another programmer is planning to use your procedure in a different program and wants to write some test cases to check whether it will work. Write a procedure call with specific argument(s) that your procedure will accept but will cause your procedure to behave incorrectly. Describe the incorrect behavior. Explain why the incorrect behavior occurs as a result of this call. If it is not possible for a call with accepted arguments to cause your procedure to behave incorrectly, explain why this is the case for your procedure.";

const PROC = ["Procedure (i)", "Procedure (ii)"];
const FILES = ["MyFeature.cs", "Program.cs"];

// One point each, as on the exam. The two rows are the two halves of that point.
const NOTE_INPUT = "One point, earned or not, as on the exam: a specific valid input and what the program really does with it. \"The player types a command and the program answers\" names no input and earns nothing.";
const NOTE_INVALID = "One point, earned or not, as on the exam: a specific unexpected or invalid input and what the program really does after it. A valid input earns nothing, and so does \"the program crashes\" when it does not.";
const NOTE_OUTPUT = "One point, earned or not, as on the exam: a specific output, close to word for word, and what it shows the program can do. \"It prints the list\" with no output earns nothing.";
const NOTE_DOC = "One point, earned or not, as on the exam: a particular piece of documentation and a particular code segment it helps another programmer understand. Help for the player, or \"comments make code easier to read\", earns nothing.";
const NOTE_TRUE = "One point, earned or not, as on the exam: the Boolean expression of the first selection statement, a specific value that makes it true, and why. A value that makes it false, or no specific value, earns nothing.";
const NOTE_FALSE = "One point, earned or not, as on the exam: the Boolean expression of the first selection statement, a specific value that makes it false, and why. A value that makes it true, or no specific value, earns nothing.";
const NOTE_NOLIST = "One point, earned or not, as on the exam, and only when both halves are there. \"The list is not used in part (ii)\" earns nothing.";
const NOTE_GROWS = "One point, earned or not, as on the exam. \"No change is needed\" with no reason earns nothing, and so does a change that is not needed.";
const NOTE_LOGIC = "One point, earned or not, as on the exam. A crash is a logic error if the response explains when and why it happens. A syntax error is not, and \"the program will not run\" with no explanation earns nothing.";
const NOTE_VALIDITY = "One point, earned or not, as on the exam. The steps earn the point only if they visit every element, pass each element (not its index) to checkValidity, give false when one call is false, and give true only after the loop.";
const NOTE_PARAMS = "One point, earned or not, as on the exam. Naming an argument from a call instead of a parameter earns nothing, and so does explaining how the list manages complexity instead of the parameters.";
const NOTE_ALGO = "One point, earned or not, as on the exam, and only when both halves are there: the variables, and values for them with the reason they stop the loop.";
const NOTE_TWOCALLS = "One point, earned or not, as on the exam. Two calls that run the same code, or calls with no specific arguments, earn nothing.";
const NOTE_PROC = "One point, earned or not, as on the exam. A crash is a logic error if the response explains when and why it happens. A syntax error is not, and a change outside the procedure earns nothing.";
const NOTE_MAINTAIN = "One point, earned or not, as on the exam, and only when both halves are there. Describing what the procedure does with nothing about maintaining the program earns nothing.";
const NOTE_CALLS = "One point, earned or not, as on the exam, and only when both halves are there. The new call needs at least one different argument value, and the reason has to come from the code.";
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

// ---------------------------------------------------------------- the Shop Ledger: word "shop", list bought
const SHOP_WORD = `string MyFeatureWord()
{
    return "shop";
}

string MyFeatureTitle()
{
    return "THE SHOP LEDGER: everything the party has bought";
}`;
const SHOP_PRICE = `int Price(string item)
{
    if (item == "potion") return 5;
    else if (item == "arrow") return 1;
    else if (item == "shield") return 8;
    else return 0;
}`;
const SHOP_BUY = `void Buy(List<string> bought, string item)
{
    if (Price(item) > 0)
    {
        bought.Add(item);
    }
}`;
const SHOP_TIMES = `int TimesBought(List<string> bought, string item)
{
    int count = 0;
    for (int i = 0; i < bought.Count; i++)
    {
        if (bought[i] == item)
        {
            count = count + 1;
        }
    }
    return count;
}`;
const SHOP_REPORT = `string ShopReport(List<string> bought, string item)
{
    if (bought.Count == 0)
    {
        return "Nothing bought yet.";
    }
    string report = "";
    int spent = 0;
    for (int i = 0; i < bought.Count; i++)
    {
        if (item == "" || bought[i] == item)
        {
            report = report + bought[i] + ", " + Price(bought[i]) + " gold\\n";
            spent = spent + Price(bought[i]);
        }
    }
    return report + "Spent: " + spent + " gold";
}`;
const SHOP_ALL = `${SHOP_WORD}\n${SHOP_PRICE}\n${SHOP_BUY}\n${SHOP_TIMES}\n${SHOP_REPORT}`;
const SHOP_BRANCH = `List<string> bought = new List<string>();
string command = ReadCommand();
string verb = FirstWord(command);
if (verb == "buy")
{
    Buy(bought, SecondWord(command));
    Console.WriteLine("Items bought: " + bought.Count);
}
else if (verb == MyFeatureWord())
{
    Console.WriteLine(MyFeatureTitle());
    Console.WriteLine(ShopReport(bought, SecondWord(command)));
}
else
{
    Console.WriteLine("I don't know that command. Type help.");
}`;
const shopRun = (t) => `${SHOP_BRANCH}\n${typed(t)}\n${WORDS}\n${SHOP_ALL}`;

// ---------------------------------------------------------------- the Bounty Board: word "bounties", list board
const BOUNTY_WORD = `string MyFeatureWord()
{
    return "bounties";
}

string MyFeatureTitle()
{
    return "THE BOUNTY BOARD: every monster the party has sworn to hunt";
}`;
const BOUNTY_POST = `void Post(List<string> board, string monster)
{
    if (monster != "")
    {
        board.Add(monster);
    }
}`;
const BOUNTY_GOLD = `int BountyGold(List<string> board, string monster, int reward)
{
    int gold = 0;
    for (int i = 0; i < board.Count; i++)
    {
        if (board[i] == monster)
        {
            gold = gold + reward;
        }
    }
    return gold;
}`;
const BOUNTY_REPORT = `string BountyReport(List<string> board, string monster)
{
    if (board.Count == 0)
    {
        return "No bounties taken yet.";
    }
    string report = "";
    int shown = 0;
    for (int i = 0; i < board.Count; i++)
    {
        if (monster == "" || board[i] == monster)
        {
            shown = shown + 1;
            report = report + "Wanted: " + board[i] + "\\n";
        }
    }
    return report + shown + " of " + board.Count + " bounties";
}`;
const BOUNTY_ALL = `${BOUNTY_WORD}\n${BOUNTY_POST}\n${BOUNTY_GOLD}\n${BOUNTY_REPORT}`;
const BOUNTY_BRANCH = `List<string> board = new List<string> { "Grub", "Bat", "Grub" };
string command = ReadCommand();
string verb = FirstWord(command);
if (verb == "take")
{
    Post(board, SecondWord(command));
    Console.WriteLine("Bounties taken: " + board.Count);
}
else if (verb == MyFeatureWord())
{
    Console.WriteLine(MyFeatureTitle());
    Console.WriteLine(BountyReport(board, SecondWord(command)));
}
else
{
    Console.WriteLine("I don't know that command. Type help.");
}`;
const bountyRun = (t) => `${BOUNTY_BRANCH}\n${typed(t)}\n${WORDS}\n${BOUNTY_ALL}`;
const BOUNTY_LIST = `List<string> board = new List<string>();
Post(board, "Grub");
Post(board, "Bat");
Post(board, "Grub");`;
const BOUNTY_CALL = `Console.WriteLine(BountyReport(board, ""));`;
const BOUNTY_OUT = "Wanted: Grub\nWanted: Bat\nWanted: Grub\n3 of 3 bounties";

// ---------------------------------------------------------------- the Relic Shelf: word "relics", list shelf
const RELIC_WORD = `string MyFeatureWord()
{
    return "relics";
}

string MyFeatureTitle()
{
    return "THE RELIC SHELF: every relic the party has found";
}`;
const RELIC_PLACE = `void Place(List<string> shelf, string relic)
{
    if (relic != "")
    {
        shelf.Add(relic);
    }
}`;
const RELIC_COUNT = `int CountRelic(List<string> shelf, string relic)
{
    int count = 0;
    for (int i = 0; i < shelf.Count; i++)
    {
        if (shelf[i] == relic)
        {
            count = count + 1;
        }
    }
    return count;
}`;
const RELIC_COUNT_DOC = `// How many times one relic is on the shelf.
// shelf: every relic found so far. relic: the relic to count, such as crown.
${RELIC_COUNT}`;
const RELIC_REPORT = `string ShelfReport(List<string> shelf, string relic)
{
    if (shelf.Count == 0)
    {
        return "The shelf is empty.";
    }
    if (relic != "" && CountRelic(shelf, relic) == 0)
    {
        return "No " + relic + " on the shelf.";
    }
    string report = "";
    for (int i = 0; i < shelf.Count; i++)
    {
        if (relic == "" || shelf[i] == relic)
        {
            report = report + (i + 1) + ". " + shelf[i] + "\\n";
        }
    }
    return report + "Relics: " + shelf.Count;
}`;
const RELIC_ALL = `${RELIC_WORD}\n${RELIC_PLACE}\n${RELIC_COUNT}\n${RELIC_REPORT}`;
const RELIC_BRANCH = `List<string> shelf = new List<string>();
Place(shelf, "crown");
Place(shelf, "idol");
Place(shelf, "crown");
string command = ReadCommand();
if (FirstWord(command) == MyFeatureWord())
{
    Console.WriteLine(MyFeatureTitle());
    Console.WriteLine(ShelfReport(shelf, SecondWord(command)));
}
else
{
    Console.WriteLine("I don't know that command. Type help.");
}`;
const relicRun = (t) => `${RELIC_BRANCH}\n${typed(t)}\n${WORDS}\n${RELIC_ALL}`;
const RELIC_LIST = `List<string> shelf = new List<string>();
Place(shelf, "crown");
Place(shelf, "idol");
Place(shelf, "crown");`;
const RELIC_CALL = `Console.WriteLine(ShelfReport(shelf, ""));`;
const RELIC_TITLE = "THE RELIC SHELF: every relic the party has found";

// ---------------------------------------------------------------- item code
const W05_II = `Console.WriteLine("A potion costs " + Price("potion") + " gold.");
Console.WriteLine("A sword costs " + Price("sword") + " gold.");`;
const W07_II = `List<string> shelf = new List<string>();
Console.WriteLine(ShelfReport(shelf, ""));
Place(shelf, "idol");
Console.WriteLine(ShelfReport(shelf, ""));`;
const W10_I = `List<string> bought = new List<string>();
Buy(bought, "potion");
Buy(bought, "arrow");
Buy(bought, "potion");`;
const W10_CALL = `Console.WriteLine(ShopReport(bought, ""));`;
const W11_ALL = `bool AllValid(List<string> board)
{
    for (int i = 0; i < board.Count; i++)
    {
        if (checkValidity(board[i]) == false)
        {
            return false;
        }
    }
    return true;
}
// A stand-in: this programmer counts a name as valid if it starts with a capital letter.
bool checkValidity(string value)
{
    return value.Length > 0 && char.IsUpper(value[0]);
}`;
const W12_II = `List<string> bought = new List<string> { "potion", "arrow", "potion" };
Console.WriteLine("potion: " + TimesBought(bought, "potion"));
Console.WriteLine("shield: " + TimesBought(bought, "shield"));`;
const W13_II = `List<string> board = new List<string> { "Grub", "Bat", "Grub" };
Console.WriteLine("Grub bounties pay " + BountyGold(board, "Grub", 5) + " gold.");`;
const W15_II = `List<string> board = new List<string> { "Bat", "Grub", "Bat", "Ogre" };
Console.WriteLine(BountyGold(board, "Bat", 4));
Console.WriteLine(BountyGold(board, "Ogre", 10));`;
const W14_II = `List<string> shelf = new List<string> { "crown", "idol", "crown" };
Console.WriteLine("crown: " + CountRelic(shelf, "crown"));`;
const W16_II = `List<string> shelf = new List<string> { "idol", "crown", "idol", "idol" };
Console.WriteLine("idols: " + CountRelic(shelf, "idol"));
Console.WriteLine("crowns: " + CountRelic(shelf, "crown"));`;
const W17_II = `List<string> bought = new List<string> { "potion", "arrow", "potion", "arrow" };
int potions = TimesBought(bought, "potion");
Console.WriteLine("Potions bought: " + potions);`;
const W18_II = `List<string> board = new List<string> { "Grub", "Bat", "Grub" };
Console.WriteLine(BountyReport(board, ""));
Console.WriteLine(BountyReport(board, "Grub"));`;
const W19_II = `List<string> shelf = new List<string> { "crown", "idol", "crown" };
Console.WriteLine(ShelfReport(shelf, "crown"));`;
const W20_II = `List<string> board = new List<string> { "Grub", "Bat", "Grub", "Ogre" };
Console.WriteLine(BountyReport(board, "Ogre"));`;
const W21_II = `List<string> bought = new List<string>();
Buy(bought, "potion");
Buy(bought, "shield");
Console.WriteLine(ShopReport(bought, ""));`;

export default {
  items: [
    // ---------------------------------------------------------------- wr-io: input and output (Question 1)
    {
      id: "m2-w01", skill: "wr-io", type: "wr",
      source: "2024 exam, Set 1, question 1",
      released: "2024s1-q1",
      labels: FILES,
      listI: `${SHOP_WORD}\n\n${SHOP_PRICE}\n\n${SHOP_BUY}`,
      listII: SHOP_BRANCH,
      prompt: P_INPUT,
      rows: [
        {
          name: "A specific valid input",
          levels: [
            "Missing, no specific input (\"the player types a command\"), or an input the program does not accept, like buy sword.",
            "Names the command, like buy, but not what is typed with it.",
            "A whole input the program accepts, word for word: buy potion, buy arrow, buy shield, or shop.",
          ],
        },
        {
          name: "What the program does with it",
          levels: [
            "Missing, or a behavior the code does not have (\"it takes gold from the party\").",
            "\"It buys the item,\" with nothing about the list or what is printed.",
            "Follows the input through the code: buy potion makes verb buy, Buy adds potion to bought because Price(\"potion\") is 5, and the program prints Items bought: 1.",
          ],
        },
      ],
      model: "One valid input is buy potion.\n\nFirstWord(command) is buy, so the first if runs. It calls Buy(bought, \"potion\"). Inside Buy, Price(\"potion\") is 5, which is more than 0, so potion is added to the end of the list bought. Then the program prints Items bought: 1. The ledger now remembers the potion, so typing shop later shows potion, 5 gold and Spent: 5 gold.",
      note: NOTE_INPUT,
      facts: "With buy potion typed, the program prints Items bought: 1. With shop typed on an empty ledger, it prints THE SHOP LEDGER: everything the party has bought and then Nothing bought yet. With buy sword typed, Price(\"sword\") is 0, nothing is added, and it prints Items bought: 0. On the quiz, and on the exam about your own code: give an exact input (the feature's word as MyFeatureWord() returns it, or the input that makes MyRecord run) and say what the code does with it, line by line.",
      verify: {
        cases: [
          { run: shopRun("buy potion"), out: "Items bought: 1" },
          { run: shopRun("shop"), out: "THE SHOP LEDGER: everything the party has bought\nNothing bought yet." },
          { run: shopRun("buy sword"), out: "Items bought: 0" },
        ],
      },
    },
    {
      id: "m2-w02", skill: "wr-io", type: "wr",
      source: "2025 exam, Set 2, question 1",
      released: "2025s2-q1",
      labels: FILES,
      listI: `${BOUNTY_WORD}\n\n${BOUNTY_POST}`,
      listII: BOUNTY_BRANCH,
      prompt: P_INVALID,
      rows: [
        {
          name: "A specific unexpected or invalid input",
          levels: [
            "Missing, no specific input, or a valid input like bounties or take Ogre.",
            "Describes a kind of input (\"a typo\") without the exact text.",
            "An exact input the program does not expect: take with no monster, Bounties with a capital B, or jump.",
          ],
        },
        {
          name: "What the program does after it",
          levels: [
            "Missing, or a behavior the code does not have (\"the game crashes\").",
            "\"It ignores it,\" with nothing about what is printed or kept.",
            "What really happens: for take alone, SecondWord gives \"\", Post adds nothing, and it prints Bounties taken: 3, the same as before. For Bounties, \"Bounties\" == \"bounties\" is false, so it prints I don't know that command. Type help.",
          ],
        },
      ],
      model: "An unexpected input is take, with no monster after it.\n\nFirstWord(command) is take, so the first if runs. SecondWord(command) is \"\", because nothing was typed after take. Post checks monster != \"\", which is false, so nothing is added to board. The program prints Bounties taken: 3, the same number as before, so no empty bounty ends up on the board and nothing crashes.",
      note: NOTE_INVALID,
      facts: "With take typed, it prints Bounties taken: 3. With Bounties typed, it prints I don't know that command. Type help. With bounties Dragon typed, it prints the title and then 0 of 3 bounties. With jump typed, it prints I don't know that command. Type help. On the quiz, and on the exam about your own code: give the feature's word with a capital letter, or with a second word that is not in the list, and say exactly what the program prints.",
      verify: {
        cases: [
          { run: bountyRun("take"), out: "Bounties taken: 3" },
          { run: bountyRun("Bounties"), out: "I don't know that command. Type help." },
          { run: bountyRun("bounties Dragon"), out: "THE BOUNTY BOARD: every monster the party has sworn to hunt\n0 of 3 bounties" },
          { run: bountyRun("jump"), out: "I don't know that command. Type help." },
        ],
      },
    },
    {
      id: "m2-w03", skill: "wr-io", type: "wr",
      source: "2025 exam, Set 1, question 1",
      released: "2025s1-q1",
      labels: FILES,
      listI: `${RELIC_WORD}\n\n${RELIC_REPORT}`,
      listII: RELIC_BRANCH,
      prompt: P_OUTPUT,
      rows: [
        {
          name: "A specific output",
          levels: [
            "Missing, no specific output (\"it prints the relics\"), or an output the code cannot print.",
            "Part of an output, or one that is close but changed (\"Relics found: 3\").",
            "An output close to word for word, like 2. idol and Relics: 3 after relics idol is typed.",
          ],
        },
        {
          name: "What it shows the program can do",
          levels: [
            "Missing, or about the program in general.",
            "\"It shows the relic shelf works,\" with nothing about what the output proves.",
            "Ties the output to the feature: the shelf remembers each relic in the order found, and the second word shows only that relic, at its place on the shelf.",
          ],
        },
      ],
      model: "When the player types relics idol, the program prints the title THE RELIC SHELF: every relic the party has found, then 2. idol, then Relics: 3.\n\nThis output shows that the shelf remembers every relic the party has found, in order. The idol was the second relic placed, so it is shown as 2. The second word idol filters the report, so the two crowns are not shown, but Relics: 3 still counts everything on the shelf.",
      note: NOTE_OUTPUT,
      facts: "With relics typed, the program prints the title, then 1. crown, 2. idol, 3. crown, and Relics: 3. With relics idol it prints the title, 2. idol and Relics: 3. With relics orb it prints the title and No orb on the shelf. On the quiz, and on the exam about your own code: copy one output of the command word for word, after the thing the list remembers has happened, and say what it shows the feature remembers.",
      verify: {
        cases: [
          { run: relicRun("relics idol"), out: `${RELIC_TITLE}\n2. idol\nRelics: 3` },
          { run: relicRun("relics"), out: `${RELIC_TITLE}\n1. crown\n2. idol\n3. crown\nRelics: 3` },
          { run: relicRun("relics orb"), out: `${RELIC_TITLE}\nNo orb on the shelf.` },
        ],
      },
    },
    {
      id: "m2-w04", skill: "wr-io", type: "wr",
      source: "2026 exam, question 1",
      released: "2026-q1",
      labels: FILES,
      listI: RELIC_COUNT_DOC,
      listII: W14_II,
      prompt: P_DOC,
      rows: [
        {
          name: "A particular piece of documentation",
          levels: [
            "Missing, documentation for the player (the help screen), or \"comments\" with nothing specific.",
            "Names a kind of documentation (\"a comment above the procedure\") without what it says.",
            "Names it and what it says: the two comment lines above CountRelic, which say what it returns and what shelf and relic are for.",
          ],
        },
        {
          name: "How another programmer uses it on a particular code segment",
          levels: [
            "Missing, or \"it makes the code easier to read\" with no code segment.",
            "Says it helps another programmer, but not with which code or how.",
            "Names the code segment, CountRelic, and how the comments help: they say a call needs the shelf and the relic to count, and gives back how many times that relic is there, so another programmer can call it without reading the loop.",
          ],
        },
      ],
      model: "One piece of documentation is the two comment lines above CountRelic. The first line says what the procedure does: it gives how many times one relic is on the shelf. The second line says what each parameter is for: shelf is every relic found so far, and relic is the one to count, such as crown.\n\nAnother programmer who wants to count relics can read those two lines and write CountRelic(shelf, \"crown\") without working through the loop. The second line also tells them that relic is one name, like crown, and not a number or a position on the shelf.",
      note: NOTE_DOC,
      facts: "CountRelic(shelf, \"crown\") is 2 for crown, idol, crown, so the line prints crown: 2. About your own code on the quiz: name the two comment lines above the procedure on your Personalized Project Reference, quote what they say, and say how they help another programmer call or change it.",
      verify: {
        cases: [
          { run: `${W14_II}\n${RELIC_COUNT_DOC}`, out: "crown: 2" },
        ],
      },
    },

    // ---------------------------------------------------------------- wr-select: the first selection statement (2025, 2(a))
    {
      id: "m2-w05", skill: "wr-select", type: "wr",
      source: "2025 exam, Set 1, question 2(a)",
      released: "2025s1-2a",
      labels: PROC,
      listI: SHOP_PRICE,
      listII: W05_II,
      prompt: P_TRUE,
      rows: [
        {
          name: "The Boolean expression and a value that makes it true",
          levels: [
            "Missing, an expression from further down the chain (item == \"arrow\"), a value that makes it false (\"sword\", or \"Potion\" with a capital), or no specific value.",
            "Names item == \"potion\" but gives no specific value (\"when the item is right\").",
            "item == \"potion\", the first if in Price, with the value \"potion\" passed in as item.",
          ],
        },
        {
          name: "Why that value makes it true",
          levels: [
            "Missing, or a reason the code does not give.",
            "\"Because it matches,\" with nothing about the two strings.",
            "When item is \"potion\", the two strings are exactly the same, so == gives true and Price returns 5.",
          ],
        },
      ],
      model: "The first selection statement is if (item == \"potion\") in Price. Its Boolean expression is item == \"potion\".\n\nThe value \"potion\" makes it true, as in the call Price(\"potion\"). The parameter item is then \"potion\", and == on strings is true only when the two strings are exactly the same, letter for letter. They are, so the expression is true, Price returns 5, and the line prints A potion costs 5 gold.",
      note: NOTE_TRUE,
      facts: "The two lines print A potion costs 5 gold. and A sword costs 0 gold. Price(\"Potion\") is 0: == is exact, so a capital P makes every test false. On the quiz, and on the exam about your own code: name the Boolean expression in the first if of the Procedure section (for the command, verb == MyFeatureWord() or command == MyFeatureWord()), give a value that makes it true, such as the word exactly as MyFeatureWord() returns it, and say the two strings are equal.",
      verify: {
        cases: [
          { run: `${W05_II}\n${SHOP_PRICE}`, out: "A potion costs 5 gold.\nA sword costs 0 gold." },
          { run: `Console.WriteLine(Price("Potion"));\n${SHOP_PRICE}`, out: "0" },
        ],
      },
    },
    {
      id: "m2-w06", skill: "wr-select", type: "wr",
      source: "2025 exam, Set 2, question 2(a)",
      released: "2025s2-2a",
      labels: PROC,
      listI: BOUNTY_WORD,
      listII: BOUNTY_BRANCH,
      prompt: P_FALSE,
      rows: [
        {
          name: "The Boolean expression and a value that makes it false",
          levels: [
            "Missing, the else if instead of the first if, a value that makes it true (take Grub, since verb is only the first word), or no specific value.",
            "Names verb == \"take\" but gives no specific input.",
            "verb == \"take\", with an input that makes it false, like bounties, help, or Take Grub with a capital T.",
          ],
        },
        {
          name: "Why that value makes it false",
          levels: [
            "Missing, or a reason the code does not give.",
            "\"Because it is a different command,\" with nothing about verb.",
            "verb is the first word typed. For bounties, verb is \"bounties\", which is not exactly \"take\", so == gives false and the program goes on to the else if.",
          ],
        },
      ],
      model: "The first selection statement is if (verb == \"take\"), so its Boolean expression is verb == \"take\".\n\nIf the player types bounties, then verb is FirstWord(\"bounties\"), which is \"bounties\". \"bounties\" and \"take\" are not the same string, so the expression is false. The first if is skipped, and the else if runs and prints the board.",
      note: NOTE_FALSE,
      facts: "With bounties typed, the program prints the title and then Wanted: Grub, Wanted: Bat, Wanted: Grub and 3 of 3 bounties. With Take Grub typed, verb is \"Take\", the expression is false, and it prints I don't know that command. Type help. With take Grub typed, the expression is true and it prints Bounties taken: 4. On the quiz, and on the exam about your own code: name the expression in the first if of the Procedure section, give an input that makes it false, such as another command or the word with a capital letter, and say the strings are not equal.",
      verify: {
        cases: [
          { run: bountyRun("bounties"), out: `THE BOUNTY BOARD: every monster the party has sworn to hunt\n${BOUNTY_OUT}` },
          { run: bountyRun("Take Grub"), out: "I don't know that command. Type help." },
          { run: bountyRun("take Grub"), out: "Bounties taken: 4" },
        ],
      },
    },
    {
      id: "m2-w07", skill: "wr-select", type: "wr",
      source: "2025 exam, Set 1, question 2(a)",
      released: "2025s1-2a",
      labels: PROC,
      listI: RELIC_REPORT,
      listII: W07_II,
      prompt: P_TRUE,
      rows: [
        {
          name: "The Boolean expression and a value that makes it true",
          levels: [
            "Missing, the second if (relic != \"\" && ...), a value that makes it false (a shelf with the idol on it), or no specific value.",
            "Names shelf.Count == 0 but gives no specific value.",
            "shelf.Count == 0, with an empty shelf, so shelf.Count is 0, as in the first call in Procedure (ii).",
          ],
        },
        {
          name: "Why that value makes it true",
          levels: [
            "Missing, or a reason the code does not give.",
            "\"Because the shelf is empty,\" with nothing about Count.",
            "Count is how many relics the list holds. With nothing placed, Count is 0, and 0 == 0 is true, so ShelfReport returns The shelf is empty. before the loop.",
          ],
        },
      ],
      model: "The first selection statement in ShelfReport is if (shelf.Count == 0), so the Boolean expression is shelf.Count == 0.\n\nIt is true when shelf has no relics, so shelf.Count is 0. That happens in the first call in Procedure (ii), because nothing has been placed yet. 0 == 0 is true, so ShelfReport returns The shelf is empty. After Place(shelf, \"idol\"), Count is 1, the expression is false, and the second call shows 1. idol.",
      note: NOTE_TRUE,
      facts: "Procedure (ii) prints The shelf is empty., then 1. idol and Relics: 1. On the quiz, and on the exam about your own code: find the first if in the Procedure section; in a MyReport it is often entries.Count == 0, which an empty list makes true.",
      verify: {
        cases: [
          { run: `${W07_II}\n${RELIC_PLACE}\n${RELIC_COUNT}\n${RELIC_REPORT}`, out: "The shelf is empty.\n1. idol\nRelics: 1" },
        ],
      },
    },

    // ---------------------------------------------------------------- wr-listuse: the list prompts
    {
      id: "m2-w08", skill: "wr-listuse", type: "wr",
      source: "2026 exam, question 2(c)",
      released: "2026-2c",
      listI: BOUNTY_LIST,
      listII: BOUNTY_REPORT,
      call: BOUNTY_CALL,
      prompt: P_NOLIST,
      rows: [
        {
          name: "How the list manages complexity",
          levels: [
            "Missing, or about lists in general with nothing about board.",
            "\"It stores the bounties,\" with nothing about why one list makes the code simpler.",
            "One name, board, holds every bounty taken, however many, and one loop in BountyReport goes over all of them by index up to board.Count.",
          ],
        },
        {
          name: "How List (ii) would change without it, or why it cannot",
          levels: [
            "Missing, \"the list is not used in part (ii),\" or a change that does not fit the code.",
            "Says it would be harder without the list, with nothing about BountyReport.",
            "Not possible: the player can take any number of bounties, and that number is not known before the game runs. Separate variables (bounty1, bounty2, bounty3) would hold only a fixed number, and BountyReport would need its own if and line for each one in place of the loop.",
          ],
        },
      ],
      model: "The list board manages complexity because one name holds every bounty the party takes, however many there are. BountyReport needs only one loop, from i = 0 while i < board.Count, to show every one of them, with the same if for each.\n\nWithout the list, it is not possible to get the same behavior. The player can type take as many times as they like, so the number of bounties is not known before the game runs. I would need separate variables like bounty1, bounty2 and bounty3, and BountyReport would need a separate if and a separate line for each variable instead of the loop. That only works up to the number of variables I wrote, so the fourth bounty would be lost.",
      note: NOTE_NOLIST,
      facts: "BountyReport(board, \"\") prints Wanted: Grub, Wanted: Bat, Wanted: Grub, then 3 of 3 bounties. After Post(board, \"Ogre\"); the same call prints four Wanted lines and 4 of 4 bounties, with no change to BountyReport. On the quiz, and on the exam about your own code: say the list holds every entry under one name and one loop shows them all, then say that without it the code would need a variable and a line per entry, which cannot hold a number of entries the game does not know ahead of time.",
      verify: {
        cases: [
          { run: `${BOUNTY_LIST}\n${BOUNTY_CALL}\n${BOUNTY_POST}\n${BOUNTY_REPORT}`, out: BOUNTY_OUT },
          { run: `${BOUNTY_LIST}\nPost(board, "Ogre");\n${BOUNTY_CALL}\n${BOUNTY_POST}\n${BOUNTY_REPORT}`, out: "Wanted: Grub\nWanted: Bat\nWanted: Grub\nWanted: Ogre\n4 of 4 bounties" },
        ],
      },
    },
    {
      id: "m2-w09", skill: "wr-listuse", type: "wr",
      source: "2025 exam, Set 1, question 2(c)",
      released: "2025s1-2c",
      listI: RELIC_LIST,
      listII: RELIC_REPORT,
      call: RELIC_CALL,
      prompt: P_GROWS,
      rows: [
        {
          name: "What List (ii) does with the new elements",
          levels: [
            "Missing, or says ShelfReport must be rewritten for the new relics.",
            "\"No change is needed,\" with nothing about what happens to the new relics.",
            "No change is needed: ShelfReport shows the new relics too, numbered after the old ones, and Relics: counts them.",
          ],
        },
        {
          name: "Why, from the code",
          levels: [
            "Missing, or a reason that is not about ShelfReport.",
            "Vague: \"the loop goes through the list.\"",
            "The loop runs while i < shelf.Count, and the last line uses shelf.Count. Count grows when relics are added, so the loop gets one more pass for each new relic, with no number in the code to change.",
          ],
        },
      ],
      model: "No change to ShelfReport is needed. Its loop runs while i < shelf.Count, and shelf.Count is how many relics are on the shelf right now. If another programmer adds an orb and another crown to the end, shelf.Count goes from 3 to 5, so the loop makes 5 passes and shows them as 4. orb and 5. crown. The last line also uses shelf.Count, so it says Relics: 5.",
      note: NOTE_GROWS,
      facts: "ShelfReport(shelf, \"\") prints 1. crown, 2. idol, 3. crown and Relics: 3. After Place(shelf, \"orb\"); Place(shelf, \"crown\"); the same call prints five numbered relics and Relics: 5. On the quiz, and on the exam about your own code: point at the loop condition in List (ii), i < entries.Count, and say Count grows with the list; if the loop has a number typed in place of Count, say that number must change.",
      verify: {
        cases: [
          { run: `${RELIC_LIST}\n${RELIC_CALL}\n${RELIC_PLACE}\n${RELIC_COUNT}\n${RELIC_REPORT}`, out: "1. crown\n2. idol\n3. crown\nRelics: 3" },
          { run: `${RELIC_LIST}\nPlace(shelf, "orb");\nPlace(shelf, "crown");\n${RELIC_CALL}\n${RELIC_PLACE}\n${RELIC_COUNT}\n${RELIC_REPORT}`, out: "1. crown\n2. idol\n3. crown\n4. orb\n5. crown\nRelics: 5" },
        ],
      },
    },
    {
      id: "m2-w10", skill: "wr-listuse", type: "wr",
      source: "2025 exam, Set 2, question 2(b)",
      released: "2025s2-2b",
      listI: W10_I,
      listII: SHOP_REPORT,
      call: W10_CALL,
      prompt: P_LOGIC,
      rows: [
        {
          name: "A modification to List (ii) that still runs",
          levels: [
            "None, a change that does not build (a missing semicolon or brace), or a change to the Buy calls in List (i) instead of ShopReport.",
            "A change too vague to try (\"change the loop\").",
            "A specific change inside ShopReport that builds and runs, like int i = 1.",
          ],
        },
        {
          name: "Why it is a logic error, consistent with the code",
          levels: [
            "Missing, or the result described is not what the changed code does.",
            "Says the report would be wrong, without saying what comes out wrong.",
            "Says what comes out wrong and why, with what it prints for this ledger.",
          ],
        },
      ],
      model: "The other programmer could change int i = 0 to int i = 1. It still builds and runs, but the loop starts at the second item, so bought[0], the first potion, is never shown or added to spent. ShopReport(bought, \"\") prints arrow, 1 gold and potion, 5 gold, then Spent: 6 gold, when the party really spent 11 gold on three items.",
      note: NOTE_LOGIC,
      facts: "As written, the call prints potion, 5 gold, arrow, 1 gold, potion, 5 gold and Spent: 11 gold. With int i = 1 it prints two lines and Spent: 6 gold. With && in place of ||, an empty item matches nothing and it prints only Spent: 0 gold. With Price(bought[0]) in place of Price(bought[i]) in the spent line, it says Spent: 15 gold. With i <= bought.Count it crashes with an ArgumentOutOfRangeException on the last pass, when i is 3. On the quiz, and on the exam about your own code: change one thing in the List (ii) loop (the start, the condition, or [i]) and say exactly what would come out wrong for a list you name.",
      verify: {
        cases: [
          { run: `${W10_I}\n${W10_CALL}\n${SHOP_PRICE}\n${SHOP_BUY}\n${SHOP_REPORT}`, out: "potion, 5 gold\narrow, 1 gold\npotion, 5 gold\nSpent: 11 gold" },
          { run: `${W10_I}\n${W10_CALL}\n${SHOP_PRICE}\n${SHOP_BUY}\n${SHOP_REPORT.replace("int i = 0", "int i = 1")}`, out: "arrow, 1 gold\npotion, 5 gold\nSpent: 6 gold" },
          { run: `${W10_I}\n${W10_CALL}\n${SHOP_PRICE}\n${SHOP_BUY}\n${SHOP_REPORT.replace("||", "&&")}`, out: "Spent: 0 gold" },
          { run: `${W10_I}\n${W10_CALL}\n${SHOP_PRICE}\n${SHOP_BUY}\n${SHOP_REPORT.replace("spent + Price(bought[i])", "spent + Price(bought[0])")}`, out: "potion, 5 gold\narrow, 1 gold\npotion, 5 gold\nSpent: 15 gold" },
          { run: `${W10_I}\n${W10_CALL}\n${SHOP_PRICE}\n${SHOP_BUY}\n${SHOP_REPORT.replace("i < bought.Count", "i <= bought.Count")}`, crash: "ArgumentOutOfRangeException" },
        ],
      },
    },
    {
      id: "m2-w11", skill: "wr-listuse", type: "wr",
      source: "2024 exam, Set 1, question 2(c)",
      released: "2024s1-2c",
      listI: BOUNTY_LIST,
      listII: BOUNTY_REPORT,
      call: BOUNTY_CALL,
      prompt: P_VALIDITY,
      rows: [
        {
          name: "Visits every element and passes each one to checkValidity",
          levels: [
            "Missing, checks only one bounty, or passes the index i (or the whole list board) to checkValidity.",
            "Loops over board, but too vague to code: no start or stop, or it is unclear what is passed.",
            "Starts i at 0 and keeps going while i < board.Count, calling checkValidity(board[i]) on each pass, so each call gets one monster name.",
          ],
        },
        {
          name: "Returns the right answer at the right time",
          levels: [
            "Missing, or returns true as soon as one name is valid.",
            "Returns false for an invalid name, but does not say when true is returned, or returns true inside the loop.",
            "Returns false as soon as one call gives false, and returns true only after the loop has checked every bounty.",
          ],
        },
      ],
      model: "1. Write a procedure AllValid that takes the list board.\n2. Set i to 0.\n3. While i is less than board.Count, call checkValidity(board[i]). This passes one monster name, like \"Bat\", not the number i.\n4. If that call returns false, stop and return false. One invalid bounty is enough.\n5. If it returns true, add 1 to i and go back to step 3.\n6. When the loop ends, every bounty has been checked and none was invalid, so return true.",
      note: NOTE_VALIDITY,
      facts: "A C# version of these steps, with a stand-in checkValidity that accepts a name starting with a capital letter, gives True for Grub, Bat, Grub. After Post(board, \"grub\"); it gives False. Calling checkValidity(board) does not build (CS1503): board is a whole list, and checkValidity takes one string. On the quiz, and on the exam about your own code: write the same steps with the list's own name, a loop to its Count, and checkValidity on each entry, list[i].",
      verify: {
        cases: [
          { run: `${BOUNTY_LIST}\n${BOUNTY_CALL}\n${BOUNTY_POST}\n${BOUNTY_REPORT}`, out: BOUNTY_OUT },
          { run: `${BOUNTY_LIST}\nConsole.WriteLine(AllValid(board));\nPost(board, "grub");\nConsole.WriteLine(AllValid(board));\n${BOUNTY_POST}\n${W11_ALL}`, out: "True\nFalse" },
          { run: `List<string> board = new List<string> { "Grub", "Bat" };
Console.WriteLine(AllValid(board));
bool AllValid(List<string> board)
{
    if (checkValidity(board) == false)
    {
        return false;
    }
    return true;
}
bool checkValidity(string value)
{
    return value.Length > 0 && char.IsUpper(value[0]);
}`, error: "CS1503" },
        ],
      },
    },

    // ---------------------------------------------------------------- wr-count: the counting procedure
    {
      id: "m2-w12", skill: "wr-count", type: "wr",
      source: "2024 exam, Set 2, question 2(c)",
      released: "2024s2-2c",
      labels: PROC,
      listI: SHOP_TIMES,
      listII: W12_II,
      prompt: P_PARAMS,
      rows: [
        {
          name: "The parameters, from the procedure header",
          levels: [
            "Missing, or names the arguments \"potion\" and \"shield\", or the variable count, instead of the parameters.",
            "Names one of bought and item, but not both, or mixes in an argument.",
            "bought and item, from the header TimesBought(List<string> bought, string item).",
          ],
        },
        {
          name: "How the parameters manage complexity",
          levels: [
            "Missing, or explains how the list manages complexity instead of the parameters.",
            "Vague: \"it makes the code reusable,\" with nothing about what bought and item change.",
            "One procedure counts any item in any ledger: the value passed in as item decides what the if compares with, so TimesBought(bought, \"potion\") and TimesBought(bought, \"shield\") use the same loop. Without item, there would be one procedure per item.",
          ],
        },
      ],
      model: "The parameters are bought and item, in the header int TimesBought(List<string> bought, string item).\n\nitem lets one procedure count any item. The value passed in as item is what the if compares each entry with, so TimesBought(bought, \"potion\") gives 2 and TimesBought(bought, \"shield\") gives 0 with the same code. Without item, I would need CountPotions, CountArrows and CountShields, each with its own copy of the loop. bought lets the procedure count in whatever list is passed in, so it works on the party's ledger or on a test list.",
      note: NOTE_PARAMS,
      facts: "The two lines print potion: 2 and shield: 0. On the quiz, and on the exam about your own code: name the two parameters of MyCount, entries and word, from its header, and say word lets one procedure count anything in the list.",
      verify: {
        cases: [
          { run: `${W12_II}\n${SHOP_TIMES}`, out: "potion: 2\nshield: 0" },
        ],
      },
    },
    {
      id: "m2-w13", skill: "wr-count", type: "wr",
      source: "2026 exam, question 2(a)",
      released: "2026-2a",
      labels: PROC,
      listI: BOUNTY_GOLD,
      listII: W13_II,
      prompt: P_ALGO,
      rows: [
        {
          name: "The variables that decide when it stops",
          levels: [
            "Missing, or names something that does not stop the loop: monster, reward, or gold.",
            "Names only one of the two: i, or board.Count.",
            "i and board.Count, the two sides of the condition i < board.Count.",
          ],
        },
        {
          name: "Values that stop it, and why",
          levels: [
            "Missing, values that would not stop it (i is 2), or \"it stops when it finds Grub\" (it checks them all).",
            "Gives values with no reason, or a reason with no values.",
            "For this call board.Count is 3, so when i becomes 3, 3 < 3 is false and the loop ends after the last Grub is checked.",
          ],
        },
      ],
      model: "The first iteration statement is the for loop in BountyGold. The variables that decide when it stops are i and board.Count, because the loop keeps going only while i < board.Count.\n\nIn the call in Procedure (ii), board holds Grub, Bat, Grub, so board.Count is 3. i starts at 0 and goes up by 1 after each pass. After the pass for the second Grub, i becomes 3. Then 3 < 3 is false, so the loop stops, and BountyGold returns 10.",
      note: NOTE_ALGO,
      facts: "The line prints Grub bounties pay 10 gold. A copy that prints i after the loop shows it stopped with i = 3 and board.Count = 3. About your own code on the quiz: name the variables in the condition of the first loop in your Procedure section (in a MyCount, i and entries.Count), give their values for a real call, and say why the condition is then false.",
      verify: {
        cases: [
          { run: `${W13_II}\n${BOUNTY_GOLD}`, out: "Grub bounties pay 10 gold." },
          { run: `List<string> board = new List<string> { "Grub", "Bat", "Grub" };
int i = 0;
for (i = 0; i < board.Count; i++)
{
}
Console.WriteLine("stopped with i = " + i + " and board.Count = " + board.Count);`, out: "stopped with i = 3 and board.Count = 3" },
        ],
      },
    },
    {
      id: "m2-w14", skill: "wr-count", type: "wr",
      source: "2024 exam, Set 1, question 2(b)",
      released: "2024s1-2b",
      labels: PROC,
      listI: RELIC_COUNT,
      listII: W14_II,
      prompt: P_TWOCALLS,
      rows: [
        {
          name: "Two calls with specific arguments that run different code",
          levels: [
            "Missing, calls with no specific arguments, or two calls that run the same code (CountRelic(shelf, \"crown\") and CountRelic(shelf, \"idol\") both run count = count + 1).",
            "Two calls that do run different code, but without saying which code each one runs.",
            "Two calls such as CountRelic(shelf, \"idol\"), which runs count = count + 1 once, and CountRelic(shelf, \"orb\"), which never runs it.",
          ],
        },
        {
          name: "The expected behavior of each call",
          levels: [
            "Missing, or results the code does not give.",
            "Gives what one call returns, but not the other.",
            "CountRelic(shelf, \"idol\") returns 1, because the if is true once. CountRelic(shelf, \"orb\") returns 0, because the if is false on every pass.",
          ],
        },
      ],
      model: "First call: CountRelic(shelf, \"idol\"), with shelf holding crown, idol, crown. The loop checks all three relics. The if is true once, when i is 1, so count = count + 1 runs once, and the call returns 1.\n\nSecond call: CountRelic(shelf, \"orb\"). The loop still checks all three relics, but the if is false every time, so count = count + 1 never runs, and the call returns 0.\n\nThe first call runs the code inside the if and the second never does.",
      note: NOTE_TWOCALLS,
      facts: "CountRelic(shelf, \"idol\") is 1, CountRelic(shelf, \"orb\") is 0, and CountRelic(new List<string>(), \"crown\") is 0, since the loop body never runs. On the quiz, and on the exam about your own code: write one call to MyCount with a word that is in the list and one with a word that is not, and say which one runs the line that adds 1.",
      verify: {
        cases: [
          { run: `${W14_II}\n${RELIC_COUNT}`, out: "crown: 2" },
          { run: `List<string> shelf = new List<string> { "crown", "idol", "crown" };
Console.WriteLine(CountRelic(shelf, "idol"));
Console.WriteLine(CountRelic(shelf, "orb"));
Console.WriteLine(CountRelic(new List<string>(), "crown"));
${RELIC_COUNT}`, out: "1\n0\n0" },
        ],
      },
    },
    {
      id: "m2-w15", skill: "wr-count", type: "wr",
      source: "2025 exam, Set 1, question 2(b)",
      released: "2025s1-2b",
      labels: PROC,
      listI: BOUNTY_GOLD,
      listII: W15_II,
      prompt: P_PROC,
      rows: [
        {
          name: "A modification inside the procedure that still builds",
          levels: [
            "None, a change that does not build (a missing semicolon or brace), or a change to the calls in Procedure (ii) instead of BountyGold.",
            "A change too vague to try (\"change the if\").",
            "A specific change inside BountyGold that builds and runs, like gold = reward; in place of gold = gold + reward;.",
          ],
        },
        {
          name: "How the behavior changes",
          levels: [
            "Missing, or the result described is not what the changed code does.",
            "Says BountyGold would be wrong, without saying what it returns now.",
            "Says what BountyGold returns now for a call, and what it should return.",
          ],
        },
      ],
      model: "The other programmer could change gold = gold + reward; to gold = reward;. It still builds and runs, but now gold is set to one reward each time a match is found, instead of growing. BountyGold(board, \"Bat\", 4) returns 4 instead of 8, even though two Bats are on the board, so the party would be paid for only one of them. A monster that is on the board once, like the Ogre, still gives the right gold, 10, so the error only shows when a bounty is taken twice.",
      note: NOTE_PROC,
      facts: "As written, the calls print 8 and 10. With gold = reward; they print 4 and 10. With gold = gold + 1; they print 2 and 1. With board[i] == \"monster\" in quotation marks they print 0 and 0. With int i = 1 they print 4 and 10, since the first Bat is skipped. On the quiz, and on the exam about your own code: describe one change inside MyCount, such as count = 1; or a return inside the loop, and say what a call you name would return then instead of now.",
      verify: {
        cases: [
          { run: `${W15_II}\n${BOUNTY_GOLD}`, out: "8\n10" },
          { run: `${W15_II}\n${BOUNTY_GOLD.replace("gold = gold + reward;", "gold = reward;")}`, out: "4\n10" },
          { run: `${W15_II}\n${BOUNTY_GOLD.replace("gold = gold + reward;", "gold = gold + 1;")}`, out: "2\n1" },
          { run: `${W15_II}\n${BOUNTY_GOLD.replace("board[i] == monster", "board[i] == \"monster\"")}`, out: "0\n0" },
          { run: `${W15_II}\n${BOUNTY_GOLD.replace("int i = 0", "int i = 1")}`, out: "4\n10" },
        ],
      },
    },
    {
      id: "m2-w16", skill: "wr-count", type: "wr",
      source: "2025 exam, Set 2, question 2(c)",
      released: "2025s2-2c",
      labels: PROC,
      listI: RELIC_COUNT,
      listII: W16_II,
      prompt: P_MAINTAIN,
      rows: [
        {
          name: "The functionality the procedure provides",
          levels: [
            "Missing, or a description that does not fit the code (\"it adds a relic to the shelf\").",
            "\"It counts relics,\" with nothing about which ones.",
            "CountRelic gives how many entries on the shelf are exactly the relic passed in.",
          ],
        },
        {
          name: "How a procedure makes the program easier to maintain",
          levels: [
            "Missing, or about what the procedure does with nothing about changing the program later.",
            "\"It is easier to change,\" with no example of a change.",
            "The counting is written once and called in more than one place (the count line, and the second if in ShelfReport), so one change to CountRelic, such as ignoring capital letters, fixes every call at once.",
          ],
        },
      ],
      model: "CountRelic gives how many relics on the shelf are exactly the relic passed in. For the shelf idol, crown, idol, idol, CountRelic(shelf, \"idol\") is 3 and CountRelic(shelf, \"crown\") is 1.\n\nBecause the counting is a procedure, the loop is written in one place and called wherever a count is needed: by the two lines in Procedure (ii), and by the second if in ShelfReport. If I wanted the count to ignore capital letters, so that Idol counts as idol, I would change the one if inside CountRelic, and every call would count the new way. Without the procedure, the same loop would be copied into each place, and I would have to find and fix every copy.",
      note: NOTE_MAINTAIN,
      facts: "The two lines print idols: 3 and crowns: 1. On the quiz, and on the exam about your own code: say what MyCount returns, then name the places that call it (the command's line, and the first lines of MyReport) and say one change to MyCount fixes them all.",
      verify: {
        cases: [
          { run: `${W16_II}\n${RELIC_COUNT}`, out: "idols: 3\ncrowns: 1" },
        ],
      },
    },
    {
      id: "m2-w17", skill: "wr-count", type: "wr",
      source: "2024 exam, Set 2, question 2(b)",
      released: "2024s2-2b",
      labels: PROC,
      listI: SHOP_TIMES,
      listII: W17_II,
      prompt: P_CALLS,
      rows: [
        {
          name: "The outcome of the call in Procedure (ii)",
          levels: [
            "Missing, or about TimesBought in general with nothing about this list and \"potion\".",
            "Says it counts potions, but not what this call gives or prints.",
            "TimesBought(bought, \"potion\") returns 2, so potions is 2 and the line prints Potions bought: 2.",
          ],
        },
        {
          name: "A new call with the same outcome, and why",
          levels: [
            "Missing, the same arguments again, or a call that gives a different number (like TimesBought(bought, \"shield\"), which gives 0).",
            "A call that does give 2, with no reason, or a reason with no call.",
            "A call such as TimesBought(bought, \"arrow\"), with the reason: arrow is also in the list exactly twice, so the if is true twice and count ends at 2.",
          ],
        },
      ],
      model: "The call TimesBought(bought, \"potion\") is meant to find how many potions the party has bought. potion is in the list twice, at index 0 and index 2, so the if is true twice and the call returns 2. The program prints Potions bought: 2.\n\nA new call with a different argument is TimesBought(bought, \"arrow\"). arrow is also in the list exactly twice, at index 1 and index 3, so count goes up twice and the call returns 2. potions would be 2, and the line would still print Potions bought: 2.",
      note: NOTE_CALLS,
      facts: "TimesBought(bought, \"potion\") and TimesBought(bought, \"arrow\") are both 2, so both print Potions bought: 2. TimesBought(bought, \"shield\") is 0. On the quiz, and on the exam about your own code: give the outcome of the MyCount call shown, then a call with a different word or list that gives the same number, and say why from the list.",
      verify: {
        cases: [
          { run: `${W17_II}\n${SHOP_TIMES}`, out: "Potions bought: 2" },
          { run: `List<string> bought = new List<string> { "potion", "arrow", "potion", "arrow" };
Console.WriteLine(TimesBought(bought, "arrow"));
Console.WriteLine(TimesBought(bought, "shield"));
${SHOP_TIMES}`, out: "2\n0" },
        ],
      },
    },

    // ---------------------------------------------------------------- wr-report: the report procedure with a loop (WR11 style)
    {
      id: "m2-w18", skill: "wr-report", type: "wr",
      source: "2024 exam, Set 2, question 2(c)",
      released: "2024s2-2c",
      labels: PROC,
      listI: BOUNTY_REPORT,
      listII: W18_II,
      prompt: P_PARAMS,
      rows: [
        {
          name: "The parameters, from the procedure header",
          levels: [
            "Missing, or names the arguments (\"\" or \"Grub\") or the variables report and shown instead of the parameters.",
            "Names one of board and monster, but not both, or mixes in an argument.",
            "board and monster, from the header BountyReport(List<string> board, string monster).",
          ],
        },
        {
          name: "How the parameters manage complexity",
          levels: [
            "Missing, or explains how the list manages complexity instead of the parameters.",
            "Vague: \"it makes the code reusable,\" with nothing about what monster changes.",
            "One procedure makes every report: monster is \"\" for the whole board or a name for just that monster, so the same loop and if give both, with no separate procedure for each monster.",
          ],
        },
      ],
      model: "The parameters are board and monster, in the header string BountyReport(List<string> board, string monster).\n\nmonster lets one procedure make every report. When monster is \"\", the if inside the loop is true for every bounty, so BountyReport(board, \"\") shows all three. When monster is \"Grub\", the same if is true only for Grubs, so BountyReport(board, \"Grub\") shows two. Without monster, I would need one procedure for the whole board and another for each kind of monster, each with its own copy of the loop. board lets the same procedure report on whatever list is passed in.",
      note: NOTE_PARAMS,
      facts: "BountyReport(board, \"\") prints three Wanted lines and 3 of 3 bounties. BountyReport(board, \"Grub\") prints two and 2 of 3 bounties. On the quiz, and on the exam about your own code: name entries and filter from the MyReport header and say filter lets one procedure show the whole list or only one word.",
      verify: {
        cases: [
          { run: `${W18_II}\n${BOUNTY_REPORT}`, out: `${BOUNTY_OUT}\nWanted: Grub\nWanted: Grub\n2 of 3 bounties` },
        ],
      },
    },
    {
      id: "m2-w19", skill: "wr-report", type: "wr",
      source: "2024 exam, Set 1, question 2(b)",
      released: "2024s1-2b",
      labels: PROC,
      listI: RELIC_REPORT,
      listII: W19_II,
      prompt: P_TWOCALLS,
      rows: [
        {
          name: "Two calls with specific arguments that run different code",
          levels: [
            "Missing, calls with no specific arguments, or two calls that run the same code (ShelfReport(shelf, \"crown\") and ShelfReport(shelf, \"idol\") both reach the loop).",
            "Two calls that do run different code, but without saying which code each one runs.",
            "Two calls that end in different places, such as ShelfReport(shelf, \"\"), which reaches the loop, and ShelfReport(shelf, \"orb\"), which returns from the second if. An empty list, which returns from the first if, also works.",
          ],
        },
        {
          name: "The expected behavior of each call",
          levels: [
            "Missing, or results the code does not give.",
            "Gives what one call returns, but not the other.",
            "ShelfReport(shelf, \"\") gives all three relics, numbered, and Relics: 3. ShelfReport(shelf, \"orb\") gives No orb on the shelf.",
          ],
        },
      ],
      model: "First call: ShelfReport(shelf, \"\"), with shelf holding crown, idol, crown. The shelf is not empty and relic is \"\", so both ifs at the top are false and the loop runs. relic == \"\" is true on every pass, so the report is 1. crown, 2. idol, 3. crown and Relics: 3.\n\nSecond call: ShelfReport(shelf, \"orb\"). The shelf is not empty, but relic is not \"\" and CountRelic(shelf, \"orb\") is 0, so the second if is true. It returns No orb on the shelf. right away, and the loop never runs.",
      note: NOTE_TWOCALLS,
      facts: "ShelfReport(shelf, \"crown\") gives 1. crown, 3. crown and Relics: 3. ShelfReport(shelf, \"\") gives all three and Relics: 3. ShelfReport(shelf, \"orb\") gives No orb on the shelf. ShelfReport(new List<string>(), \"\") gives The shelf is empty. On the quiz, and on the exam about your own code: write two calls to MyReport, such as an empty filter and a filter that is not in the list (or an empty list), and say which return each one reaches and what it gives.",
      verify: {
        cases: [
          { run: `${W19_II}\n${RELIC_COUNT}\n${RELIC_REPORT}`, out: "1. crown\n3. crown\nRelics: 3" },
          { run: `List<string> shelf = new List<string> { "crown", "idol", "crown" };
Console.WriteLine(ShelfReport(shelf, ""));
Console.WriteLine(ShelfReport(shelf, "orb"));
Console.WriteLine(ShelfReport(new List<string>(), ""));
${RELIC_COUNT}
${RELIC_REPORT}`, out: "1. crown\n2. idol\n3. crown\nRelics: 3\nNo orb on the shelf.\nThe shelf is empty." },
        ],
      },
    },
    {
      id: "m2-w20", skill: "wr-report", type: "wr",
      source: "2025 exam, Set 2, question 2(c)",
      released: "2025s2-2c",
      labels: PROC,
      listI: BOUNTY_REPORT,
      listII: W20_II,
      prompt: P_MAINTAIN,
      rows: [
        {
          name: "The functionality the procedure provides",
          levels: [
            "Missing, or a description that does not fit the code (\"it adds a bounty\").",
            "\"It shows the bounties,\" with nothing about the filter or the count line.",
            "BountyReport gives the board as one string: a Wanted line for every bounty, or only the ones that are exactly monster, then how many were shown out of the whole board.",
          ],
        },
        {
          name: "How a procedure makes the program easier to maintain",
          levels: [
            "Missing, or about what the procedure does with nothing about changing the program later.",
            "\"It is easier to change,\" with no example of a change.",
            "The report is built in one place, so a change to how it looks, such as Hunt: in place of Wanted:, is made once inside BountyReport and every call shows it, whole board or one monster.",
          ],
        },
      ],
      model: "BountyReport gives the bounty board as one string. If monster is \"\", it has a Wanted line for every bounty. If monster is a name, it has a line only for the bounties that are exactly that name. It ends with how many lines were shown out of the whole board, so BountyReport(board, \"Ogre\") gives Wanted: Ogre and 1 of 4 bounties.\n\nBecause the report is a procedure, the loop that builds it is written once. If I want every line to say Hunt: instead of Wanted:, I change one line inside BountyReport, and the full board and every one-monster report change together. Without the procedure, the loop would be copied for each way the board is shown, and I would have to change each copy and could miss one.",
      note: NOTE_MAINTAIN,
      facts: "BountyReport(board, \"Ogre\") prints Wanted: Ogre and 1 of 4 bounties. On the quiz, and on the exam about your own code: say what MyReport gives back, with and without a filter, and name one change to how the report looks that is made once, inside MyReport, for every call.",
      verify: {
        cases: [
          { run: `${W20_II}\n${BOUNTY_REPORT}`, out: "Wanted: Ogre\n1 of 4 bounties" },
        ],
      },
    },
    {
      id: "m2-w21", skill: "wr-report", type: "wr",
      source: "2026 exam, question 2(b)",
      released: "2026-2b",
      labels: PROC,
      listI: SHOP_REPORT,
      listII: W21_II,
      prompt: P_BADCALL,
      rows: [
        {
          name: "A specific call the procedure accepts",
          levels: [
            "Missing, a call with no specific arguments (\"a list with a bad item\"), or a call that does not build (ShopReport(\"potion\"), with no list).",
            "A call that builds, but one that ShopReport handles correctly, like ShopReport(bought, \"arrow\").",
            "A call with specific arguments that builds and runs, like ShopReport(new List<string> { \"potion\", \"sword\" }, \"\") or ShopReport(bought, \"Potion\").",
          ],
        },
        {
          name: "The incorrect behavior, and why it happens",
          levels: [
            "Missing, or a result the code does not give (\"it crashes\").",
            "Says the report would be wrong, without saying what it shows.",
            "What it shows and why: the sword is listed as sword, 0 gold, because Price(\"sword\") falls to the else and returns 0, and ShopReport never checks that an item was sold. (For \"Potion\", == is exact, so no line matches and it says Spent: 0 gold.)",
          ],
        },
      ],
      model: "A call that ShopReport accepts but gets wrong is ShopReport(new List<string> { \"potion\", \"sword\" }, \"\"). Both arguments are the right types, so it builds and runs.\n\nIt returns potion, 5 gold, then sword, 0 gold, then Spent: 5 gold. That is wrong: the shop does not sell swords, so a sword should not be in the ledger at all, and nothing costs 0 gold. It happens because ShopReport trusts the list it is given. In my game only Buy adds to bought, and Buy skips anything with a price of 0, but another program could pass in any list. Price(\"sword\") reaches the else and returns 0, and ShopReport prints that line anyway.",
      note: NOTE_BADCALL,
      facts: "Procedure (ii) prints potion, 5 gold, shield, 8 gold and Spent: 13 gold. ShopReport(new List<string> { \"potion\", \"sword\" }, \"\") prints potion, 5 gold, sword, 0 gold and Spent: 5 gold. ShopReport(bought, \"Potion\") prints only Spent: 0 gold. About your own code on the quiz: write a call to the procedure on your Personalized Project Reference with exact arguments it accepts but handles badly (a word with a capital letter, an empty string, a list built some other way), and say what goes wrong and which line causes it; if every accepted call works, say why.",
      verify: {
        cases: [
          { run: `${W21_II}\n${SHOP_PRICE}\n${SHOP_BUY}\n${SHOP_REPORT}`, out: "potion, 5 gold\nshield, 8 gold\nSpent: 13 gold" },
          { run: `Console.WriteLine(ShopReport(new List<string> { "potion", "sword" }, ""));
List<string> bought = new List<string> { "potion", "shield" };
Console.WriteLine(ShopReport(bought, "Potion"));
${SHOP_PRICE}
${SHOP_REPORT}`, out: "potion, 5 gold\nsword, 0 gold\nSpent: 5 gold\nSpent: 0 gold" },
        ],
      },
    },
  ],
};

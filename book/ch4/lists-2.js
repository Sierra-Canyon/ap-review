export default {
  id: "lists-2",
  chapter: 4,
  number: "4.2",
  title: "Parallel lists: one index, several lists",
  from: "Lists 2 · Day 9",
  minutes: 25,
  skills: ["parallel"],
  goals: [
    "Keep one character's name, health, and attack at the same index in three lists",
    "Pass whole lists to a function and read all of them with one index `i`",
    "Say why two `List<int>` arguments can be swapped and still build",
    "Say what goes wrong when one list misses an `Add`",
  ],
  blocks: [
    {
      type: "text",
      md: "In the game, the party is three lists: `names`, `health`, and `attack`. There is no variable called `rook`. Rook is index 0 of all three lists: `names[0]`, `health[0]`, and `attack[0]`.",
    },
    {
      type: "code",
      code: `List<string> names = new List<string>();
List<int> health = new List<int>();
List<int> attack = new List<int>();
names.Add("Rook");
health.Add(10);
attack.Add(4);
names.Add("Mote");
health.Add(7);
attack.Add(3);
names.Add("Hero");
health.Add(8);
attack.Add(3);
Console.WriteLine(names[1] + " " + health[1] + " " + attack[1]);`,
      expect: { out: "Mote 7 3" },
    },
    {
      type: "text",
      md: "Read the three lists side by side, like the columns of a table:\n\n- index 0: `Rook`, 10, 4\n- index 1: `Mote`, 7, 3\n- index 2: `Hero`, 8, 3\n\nLists kept in step like this are **parallel lists**. One index, read from every list, is one character.",
    },
    {
      type: "text",
      md: "## A list as a parameter\n\nA function can take a whole list as a parameter, the same way it takes an `int`. `PrintMember` takes all three lists and one more number, `i`, that says which character.",
    },
    {
      type: "recipe",
      title: "A list as a parameter",
      template: "void {Name}(List<{Type}> {list}, int {i})",
      parts: [
        { slot: "{Name}", meaning: "the function's name, like `PrintMember`" },
        { slot: "List<{Type}> {list}", meaning: "a whole list arrives under this name. The call passes the list by its own name, with no brackets: `PrintMember(names, health, attack, 0)`" },
        { slot: "int {i}", meaning: "the index: one number, used in the brackets of every list" },
      ],
    },
    {
      type: "text",
      md: "Step through this one. `AddCharacter` adds to all three lists at once, and `PrintMember` reads all three with the same `i`. Open each list in the Variables pane and compare the items at index 0.",
    },
    {
      type: "step",
      code: `List<string> names = new List<string>();
List<int> health = new List<int>();
List<int> attack = new List<int>();
AddCharacter(names, health, attack, "Rook", 10, 4);
AddCharacter(names, health, attack, "Mote", 7, 3);
AddCharacter(names, health, attack, "Hero", 8, 3);
PrintMember(names, health, attack, 0);
PrintMember(names, health, attack, 2);

void AddCharacter(List<string> names, List<int> health, List<int> attack, string name, int hp, int atk)
{
    names.Add(name);
    health.Add(hp);
    attack.Add(atk);
}

void PrintMember(List<string> names, List<int> health, List<int> attack, int i)
{
    Console.WriteLine(i + ": " + names[i] + " has " + health[i] + " health and " + attack[i] + " attack.");
}`,
      notes: {
        "4": "Passes all three lists and Rook's three facts. They go in together, so all three land at index 0.",
        "14": "The third Add. Every list now has one more item, and all three Counts are the same.",
        "7": "i is 0, so PrintMember reads index 0 of every list: Rook.",
        "19": "One i in three pairs of brackets. The same number in every list is what makes this one character.",
        "8": "i is 2 this time: Hero.",
      },
      expect: { out: "0: Rook has 10 health and 4 attack.\n2: Hero has 8 health and 3 attack." },
    },
    {
      type: "text",
      md: "## Three Adds, every time\n\nNothing in C# ties `health[1]` to `names[1]`. They line up only because every character was added to every list, in the same order. Here is a level's monsters, with one `Add` missing.",
    },
    {
      type: "code",
      code: `List<string> monsters = new List<string>();
List<int> monsterHp = new List<int>();
monsters.Add("Wolf");
monsterHp.Add(6);
monsters.Add("Slime");
monsters.Add("Ogre");
monsterHp.Add(9);
Console.WriteLine(monsters.Count + " " + monsterHp.Count);
Console.WriteLine(monsters[1] + " has " + monsterHp[1]);
Console.WriteLine(monsters[2] + " has " + monsterHp[2]);`,
      expect: { out: "3 2\nSlime has 9", crash: "ArgumentOutOfRangeException" },
    },
    {
      type: "text",
      md: "It prints `3 2`, then `Slime has 9`: the Slime gets the Ogre's health. The last line stops with `ArgumentOutOfRangeException`, because `monsterHp` has only two items and no index 2. Put `monsterHp.Add(3);` under `monsters.Add(\"Slime\");` and run it again.",
    },
    {
      type: "note",
      kind: "trap",
      md: "A missing `Add` builds. The compiler does not know how long a list is. Every monster after the gap reads the next monster's number, and the last one crashes with `ArgumentOutOfRangeException: Index was out of range. Must be non-negative and less than the size of the collection.` When parallel lists act strange, print each list's `Count` first.",
    },
    {
      type: "text",
      md: "## Two lists swapped\n\n`health` and `attack` are both `List<int>`. Swap them in the call to `PrintMember` and run it.",
    },
    {
      type: "code",
      code: `List<string> names = new List<string>();
List<int> health = new List<int>();
List<int> attack = new List<int>();
names.Add("Rook");
health.Add(10);
attack.Add(4);
PrintMember(names, attack, health, 0);

void PrintMember(List<string> names, List<int> health, List<int> attack, int i)
{
    Console.WriteLine(i + ": " + names[i] + " has " + health[i] + " health and " + attack[i] + " attack.");
}`,
      expect: { out: "0: Rook has 4 health and 10 attack." },
    },
    {
      type: "text",
      md: "It builds and prints `0: Rook has 4 health and 10 attack.` Arguments go to parameters by position, so the attack list arrives in the parameter called `health`. The compiler checks only that a `List<int>` arrived where a `List<int>` was promised.\n\nA value of a different type is caught. This line tries to add a name to a list of numbers:",
    },
    {
      type: "code",
      code: `List<int> monsterHp = new List<int>();
string name = "Grub";
monsterHp.Add(name);`,
      expect: { error: "CS1503" },
    },
    {
      type: "text",
      md: "The build stops with `CS1503: Argument 1: cannot convert from 'string' to 'int'`.",
    },
    {
      type: "note",
      kind: "note",
      md: "A parameter's name is only a name. Inside `PrintMember`, `health` is whatever list came second in the call.",
    },
    {
      type: "text",
      md: "## Without the lists\n\nA party of three without lists is nine variables. `PrintMember` needs all nine as parameters, and an `if` on `i` to choose which three to print.",
    },
    {
      type: "code",
      code: `string name0 = "Rook";
int health0 = 10;
int attack0 = 4;
string name1 = "Mote";
int health1 = 7;
int attack1 = 3;
string name2 = "Hero";
int health2 = 8;
int attack2 = 3;
PrintMember(name0, health0, attack0, name1, health1, attack1, name2, health2, attack2, 2);

void PrintMember(string name0, int health0, int attack0, string name1, int health1, int attack1, string name2, int health2, int attack2, int i)
{
    if (i == 0)
    {
        Console.WriteLine(i + ": " + name0 + " has " + health0 + " health and " + attack0 + " attack.");
    }
    else if (i == 1)
    {
        Console.WriteLine(i + ": " + name1 + " has " + health1 + " health and " + attack1 + " attack.");
    }
    else if (i == 2)
    {
        Console.WriteLine(i + ": " + name2 + " has " + health2 + " health and " + attack2 + " attack.");
    }
}`,
      expect: { out: "2: Hero has 8 health and 3 attack." },
    },
    {
      type: "text",
      md: "It prints the same line as the list version. A fourth character costs three more variables, three more parameters on the first line of `PrintMember`, another `else if` in its body, and three more arguments in every call. With lists, the first line of `PrintMember` is the same for a party of any size.",
    },
    {
      type: "ap",
      md: "The 2025 exam's Set 2, question 2(b), asked about the code segment in your own program: *Describe a modification the other programmer could make to this code segment that would result in a logic error. Explain why this modification would result in a logic error.* A logic error builds and runs and gives a wrong answer. Parallel lists give you two. Swap two lists of the same type in a call: `PrintMember(names, attack, health, 0)` prints Rook with 4 health and 10 attack, and nothing stops it because both are `List<int>`. Or delete one `Add`: the monster after the gap gets the next monster's health. Name the change, then say what comes out wrong and for whom.",
    },
    {
      type: "mcq",
      id: "lists-2-q1",
      question: "Pip joins the party. What is printed?",
      code: `List<string> names = new List<string>();
List<int> health = new List<int>();
List<int> attack = new List<int>();
names.Add("Rook");
health.Add(10);
attack.Add(4);
attack.Add(2);
names.Add("Pip");
health.Add(6);
Console.WriteLine(names[1] + " " + health[1] + " " + attack[1]);`,
      choices: ["Pip 6 2", "Pip 2 6", "It builds, then crashes when it runs.", "It does not build: the Adds for Pip are out of order."],
      answer: 0,
      why: [
        "Each list got Rook first and Pip second, so Pip is index 1 in all three. The order of the three Adds for one character does not matter.",
        "attack[1] is 2 and health[1] is 6. The line prints health before attack.",
        "Every list has two items, so index 1 is there in all three.",
        "The compiler does not track which list is added to first.",
      ],
      verify: { out: "Pip 6 2" },
    },
    {
      type: "mcq",
      id: "lists-2-q2",
      question: "In the game, where is everything about Mote kept?",
      choices: [
        "At index 1 of `names`, `health`, and `attack`",
        "In a variable called `mote`",
        "In the list `names`",
        "In the list `health`, at index 7",
      ],
      answer: 0,
      why: [
        "A character is an index that all three lists share. `names[1]`, `health[1]`, and `attack[1]` together are Mote.",
        "There is no `mote` variable. Every character is a place in three lists.",
        "`names` holds only the names. Mote's health and attack are in the other two lists.",
        "7 is Mote's health, not an index. Mote is at index 1.",
      ],
      verify: null,
    },
    {
      type: "mcq",
      id: "lists-2-q3",
      question: "Pip should join with 6 health and 2 attack. Which line adds Pip correctly?",
      code: `void AddCharacter(List<string> names, List<int> health, List<int> attack, string name, int hp, int atk)
{
    names.Add(name);
    health.Add(hp);
    attack.Add(atk);
}`,
      choices: [
        `AddCharacter(names, health, attack, "Pip", 6, 2);`,
        `AddCharacter(names, attack, health, "Pip", 6, 2);`,
        `names.Add("Pip");`,
        `AddCharacter(names, health, attack, 6, 2, "Pip");`,
      ],
      mono: true,
      answer: 0,
      why: [
        "The lists go in the order the parameters ask for, then the name, the health, and the attack.",
        "It builds, because both are List<int>. The attack list lands in the parameter called health, so Pip ends up with 2 health and 6 attack.",
        "Only names grows. health and attack are one item short, and reading Pip's health crashes with ArgumentOutOfRangeException.",
        "The fourth parameter is a string and 6 is an int. The build stops with CS1503.",
      ],
      verify: {
        cases: [
          { run: `List<string> names = new List<string>();\nList<int> health = new List<int>();\nList<int> attack = new List<int>();\nAddCharacter(names, health, attack, "Rook", 10, 4);\nAddCharacter(names, health, attack, "Pip", 6, 2);\nConsole.WriteLine(names[1] + " " + health[1] + " " + attack[1]);\nvoid AddCharacter(List<string> names, List<int> health, List<int> attack, string name, int hp, int atk)\n{\n    names.Add(name);\n    health.Add(hp);\n    attack.Add(atk);\n}`, out: "Pip 6 2" },
          { run: `List<string> names = new List<string>();\nList<int> health = new List<int>();\nList<int> attack = new List<int>();\nAddCharacter(names, health, attack, "Rook", 10, 4);\nAddCharacter(names, attack, health, "Pip", 6, 2);\nConsole.WriteLine(names[1] + " " + health[1] + " " + attack[1]);\nvoid AddCharacter(List<string> names, List<int> health, List<int> attack, string name, int hp, int atk)\n{\n    names.Add(name);\n    health.Add(hp);\n    attack.Add(atk);\n}`, out: "Pip 2 6" },
          { run: `List<string> names = new List<string>();\nList<int> health = new List<int>();\nList<int> attack = new List<int>();\nAddCharacter(names, health, attack, "Rook", 10, 4);\nnames.Add("Pip");\nConsole.WriteLine(names[1] + " " + health[1] + " " + attack[1]);\nvoid AddCharacter(List<string> names, List<int> health, List<int> attack, string name, int hp, int atk)\n{\n    names.Add(name);\n    health.Add(hp);\n    attack.Add(atk);\n}`, crash: "ArgumentOutOfRangeException" },
          { run: `List<string> names = new List<string>();\nList<int> health = new List<int>();\nList<int> attack = new List<int>();\nAddCharacter(names, health, attack, 6, 2, "Pip");\nvoid AddCharacter(List<string> names, List<int> health, List<int> attack, string name, int hp, int atk)\n{\n    names.Add(name);\n    health.Add(hp);\n    attack.Add(atk);\n}`, error: "CS1503" },
        ],
      },
    },
    {
      type: "parsons",
      id: "lists-2-p1",
      prompt: "Put the lines in order so the program prints `Slime 3`: the second monster's name and health, read with one index.",
      lines: [
        `List<string> foes = new List<string>();`,
        `List<int> foeHealth = new List<int>();`,
        `foes.Add("Wolf");`,
        `foeHealth.Add(6);`,
        `foes.Add("Slime");`,
        `foeHealth.Add(3);`,
        `Console.WriteLine(foes[1] + " " + foeHealth[1]);`,
      ],
      distractors: [`Console.WriteLine(foes[1] + " " + foeHealth[0]);`, `foeHealth.Add("Slime");`],
      expect: { out: "Slime 3" },
    },
    {
      type: "exercise",
      id: "lists-2-e1",
      prompt: "`AddCharacter` adds the name and forgets the rest, so the first test gives `3 0 0`. Finish it so all three lists stay in step. Then write `Card`, which returns the line for the character at index `i`, like `Rook: 10 health, 4 attack`.",
      starter: `void AddCharacter(List<string> names, List<int> health, List<int> attack, string name, int hp, int atk)
{
    names.Add(name);
}

string Card(List<string> names, List<int> health, List<int> attack, int i)
{
    return "?";
}`,
      solution: `void AddCharacter(List<string> names, List<int> health, List<int> attack, string name, int hp, int atk)
{
    names.Add(name);
    health.Add(hp);
    attack.Add(atk);
}

string Card(List<string> names, List<int> health, List<int> attack, int i)
{
    return names[i] + ": " + health[i] + " health, " + attack[i] + " attack";
}`,
      given: `List<string> names = new List<string>();
List<int> health = new List<int>();
List<int> attack = new List<int>();
AddCharacter(names, health, attack, "Rook", 10, 4);
AddCharacter(names, health, attack, "Mote", 7, 3);
AddCharacter(names, health, attack, "Pip", 6, 2);`,
      tests: [
        { call: `names.Count + " " + health.Count + " " + attack.Count`, expect: "3 3 3" },
        { call: `Card(names, health, attack, 0)`, expect: "Rook: 10 health, 4 attack" },
        { call: `Card(names, health, attack, 1)`, expect: "Mote: 7 health, 3 attack" },
        { call: `Card(names, health, attack, 2)`, expect: "Pip: 6 health, 2 attack" },
      ],
      hints: [
        "`AddCharacter` needs one `Add` for each list: `health.Add(hp);` and `attack.Add(atk);`.",
        "In `Card`, the same `i` goes in the brackets of all three lists.",
      ],
    },
    {
      type: "summary",
      items: [
        "Parallel lists keep one character's facts at the same index: `names[0]`, `health[0]`, and `attack[0]` are Rook.",
        "A function can take a whole list as a parameter, `List<int> health`, and read any index of it.",
        "The lists line up only because every character is added to every list, in the same order. A missing `Add` builds, hands the next item's value to the wrong character, and crashes past the end of the short list.",
        "Two lists of the same type can be swapped in a call and it still builds: `PrintMember(names, attack, health, 0)` prints `0: Rook has 4 health and 10 attack.`",
        "A value of the wrong type is caught: adding a `string` to a `List<int>` stops at `CS1503`.",
        "Without lists, every character is three variables, and a function that reads the party needs three parameters per character.",
      ],
    },
  ],
};

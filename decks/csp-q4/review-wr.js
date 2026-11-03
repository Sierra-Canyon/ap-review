// AP CSP · Quiz 4: Functions and Loops · review items, written responses (WR4, WR5, WR6, Quiz 4 Part B)
// Same shape as the wr items in decks/csp-q3.js. Every block of code here is checked on .NET 10 by tools/verify.mjs:
// each item's first case runs the code exactly as students see it.
// A Procedure-section item has labels ["Procedure (i)", "Procedure (ii)"]: listI is the procedure, listII the code that calls it.

const PROMPT_CALLS = "Consider the procedure and procedure call identified in parts (i) and (ii) of the Procedure section of your Personalized Project Reference. Describe the outcome that your procedure call is intended to produce. Write a new procedure call with at least one different argument value that will produce the same outcome, if possible, and explain why this procedure call produces the same outcome. If it is not possible to write a new procedure call that produces the same outcome, explain why this is not possible.";
const PROMPT_GROWS = "Consider the list included in the List section of your Personalized Project Reference. Suppose another programmer adds several new elements to the end of the list. Explain how the code segment in part (ii) of the List section would need to be modified to account for the additional elements. If no changes to the code segment are necessary, explain why this is the case for your program.";
const PROMPT_VALIDITY = "Suppose another programmer provides you with a procedure called checkValidity(value) that returns true if a value passed as an argument is considered valid by the other programmer and returns false otherwise. Using the list identified in the List section of your Personalized Project Reference, explain in detailed steps an algorithm that uses checkValidity to check whether all elements in your list are considered valid by the other programmer. Your explanation must be detailed enough for someone else to write the program code for the algorithm that uses checkValidity.";
const PROMPT_ALGO = "Consider the first iteration statement in the Procedure section of your Personalized Project Reference. Identify the variable(s) that determine when the iteration statement stops iterating. Identify specific values for the variable(s) that will cause the iteration statement to stop. Explain why these value(s) would cause the iteration statement to stop. If there are no such variable(s) or specific value(s), explain how the iteration statement stops.";
const PROMPT_PROC = "Consider the procedure included in part (i) of the Procedure section of your Personalized Project Reference. Suppose another programmer modifies the code within this procedure. Describe a modification the other programmer could make that would cause this procedure to have a logic error. Describe how the behavior of this procedure would change because of the error.";
const PROMPT_PARAMS = "Consider the procedure identified in part (i) of the Procedure section of your Personalized Project Reference. Identify the parameter(s) used in this procedure. Explain how your identified parameter(s) use abstraction to manage complexity in your program.";
const PROMPT_LOGIC = "Consider the code segment in part (ii) of the List section of your Personalized Project Reference. Suppose another programmer modifies this code segment. Describe a modification the other programmer could make to this code segment that would result in a logic error. Explain why this modification would result in a logic error.";

const PROC = ["Procedure (i)", "Procedure (ii)"];
const NOTE_CALLS = "The exam gives its one point only when both halves are there. The new call needs at least one different argument value, and the reason has to come from the code.";
const NOTE_GROWS = "\"No change is needed\" with no reason earns nothing. The exam gives its one point only when both halves are there.";
const NOTE_VALIDITY = "The algorithm earns the point only if it visits every element, passes each element (not its index) to checkValidity, returns false as soon as one call is false, and returns true only after the loop.";
const NOTE_ALGO = "The exam gives its one point only when both halves are there: the variables, and values for them with the reason they stop the loop.";
const NOTE_PROC = "A crash is a logic error if the response explains when and why it happens. A syntax error is not, and \"the program will not run\" with no explanation earns nothing.";
const NOTE_PARAMS = "Naming an argument instead of a parameter earns nothing, and so does a parameter that does not change the result. The exam gives its one point only when both halves are there.";
const NOTE_LOGIC = "A crash is a logic error if the response explains it. A syntax error is not, and \"the program will not run\" with no explanation earns nothing.";

// ---------------------------------------------------------------- game code the runs need
const IS_ALIVE = `bool IsAlive(int hp)
{
    return hp > 0;
}`;

// ---------------------------------------------------------------- wr-calls
const W01_I = `int Damage(int attackPower, int defense)
{
    int dealt = attackPower - defense;
    if (dealt < 1) dealt = 1;
    return dealt;
}`;
const W01_II = `int dealt = Damage(7, 3);
Console.WriteLine("Rook hits Grub for " + dealt + ".");`;

const W02_I = `int StrongestIndex(List<int> attack)
{
    int best = 0;
    for (int i = 1; i < attack.Count; i++)
    {
        if (attack[i] > attack[best]) best = i;
    }
    return best;
}`;
const W02_II = `List<string> mNames = new List<string> { "Grub", "Bat", "Ogre", "Bat" };
List<int> mAttack = new List<int> { 2, 3, 6, 4 };
int first = StrongestIndex(mAttack);
Console.WriteLine(mNames[first] + " attacks first.");`;

const W03_I = `void Welcome(string name, int floor)
{
    Console.WriteLine(name + " steps onto floor " + floor + ".");
}`;
const W03_II = `Welcome("Mote", 3);`;

// ---------------------------------------------------------------- wr-grows
const W04_I = `List<int> mHealth = new List<int>();
mHealth.Add(4);
mHealth.Add(0);
mHealth.Add(9);
mHealth.Add(2);`;
const W04_II = `int CountAlive(List<int> health)
{
    int alive = 0;
    for (int i = 0; i < health.Count; i++)
    {
        if (health[i] > 0)
        {
            alive = alive + 1;
        }
    }
    return alive;
}`;
const W04_CALL = `Console.WriteLine(CountAlive(mHealth) + " monsters still stand.");`;

const W05_I = `List<string> names = new List<string>();
names.Add("Rook");
names.Add("Mote");`;
const W05_II = `int FindCharacter(List<string> names, string name)
{
    for (int i = 0; i < names.Count; i++)
    {
        if (names[i] == name) return i;
    }
    return -1;
}`;
const W05_CALL = `Console.WriteLine(FindCharacter(names, "Mote"));`;

const W06_I = `List<string> names = new List<string>();
names.Add("Rook");
names.Add("Mote");
names.Add("Hero");`;
const W06_II = `void ShowParty(List<string> names)
{
    for (int i = 0; i < 3; i++)
    {
        Console.WriteLine((i + 1) + ". " + names[i]);
    }
    Console.WriteLine("Last in line: " + names[2]);
}`;
const W06_CALL = "ShowParty(names);";
const W06_FIXED = `void ShowParty(List<string> names)
{
    for (int i = 0; i < names.Count; i++)
    {
        Console.WriteLine((i + 1) + ". " + names[i]);
    }
    Console.WriteLine("Last in line: " + names[names.Count - 1]);
}`;

// ---------------------------------------------------------------- wr-validity
const W07_I = `List<string> spells = new List<string>();
spells.Add("spark");
spells.Add("frost");
spells.Add("mend");`;
const W07_II = `void CastAll(List<string> spells)
{
    for (int i = 0; i < spells.Count; i++)
    {
        Console.WriteLine("Mote casts " + spells[i] + ".");
    }
}`;
const W07_CALL = "CastAll(spells);";
const W07_ALL = `bool AllValid(List<string> spells)
{
    for (int i = 0; i < spells.Count; i++)
    {
        if (checkValidity(spells[i]) == false)
        {
            return false;
        }
    }
    return true;
}
// A stand-in: this programmer counts a spell as valid if it has 1 to 6 letters.
bool checkValidity(string value)
{
    return value.Length >= 1 && value.Length <= 6;
}`;

const W08_I = `List<int> health = new List<int>();
health.Add(10);
health.Add(7);
health.Add(8);`;
const W08_II = `int WeakestIndex(List<int> health)
{
    if (health.Count == 0)
    {
        return -1;
    }
    int weakest = 0;
    for (int i = 1; i < health.Count; i++)
    {
        if (health[i] < health[weakest])
        {
            weakest = i;
        }
    }
    return weakest;
}`;
const W08_CALL = "Console.WriteLine(WeakestIndex(health));";
const W08_CHECK = `// A stand-in: this programmer counts a health from 0 to 10 as valid.
bool checkValidity(int value)
{
    return value >= 0 && value <= 10;
}`;

const W09_I = `List<string> level = new List<string>();
level.Add("#######");
level.Add("#@..$.#");
level.Add("#.##..#");
level.Add("#M..$+#");
level.Add("#######");`;
const W09_II = `int CountGold(List<string> level)
{
    int gold = 0;
    for (int y = 0; y < level.Count; y++)
    {
        for (int x = 0; x < level[y].Length; x++)
        {
            if (level[y][x] == '$')
            {
                gold = gold + 1;
            }
        }
    }
    return gold;
}`;
const W09_CALL = "Console.WriteLine(CountGold(level));";
const W09_ALL = `bool AllValid(List<string> level)
{
    for (int y = 0; y < level.Count; y++)
    {
        if (checkValidity(level[y]) == false)
        {
            return false;
        }
    }
    return true;
}
// A stand-in: this programmer counts a row as valid if it starts and ends with a wall.
bool checkValidity(string value)
{
    return value.Length > 0 && value[0] == '#' && value[value.Length - 1] == '#';
}`;

// ---------------------------------------------------------------- wr-algo
const W10_I = `void PartyReport(List<string> names, List<int> health)
{
    for (int i = 0; i < names.Count; i++)
    {
        if (health[i] > 0)
        {
            Console.WriteLine(names[i] + " is up with " + health[i] + ".");
        }
        else
        {
            Console.WriteLine(names[i] + " is down.");
        }
    }
}`;
const W10_II = `List<string> party = new List<string> { "Rook", "Mote", "Hero" };
List<int> partyHealth = new List<int> { 6, 0, 8 };
PartyReport(party, partyHealth);`;

const W11_I = `int NextAliveIndex(List<int> health)
{
    for (int i = 0; i < health.Count; i++)
    {
        if (IsAlive(health[i])) return i;
    }
    return -1;
}`;
const W11_II = `List<int> mHealth = new List<int> { 0, 0, 5, 8 };
Console.WriteLine(NextAliveIndex(mHealth));`;

const W12_I = `int TurnsToFall(int hp, int dealt)
{
    int turns = 0;
    while (hp > 0)
    {
        hp = hp - dealt;
        turns = turns + 1;
    }
    return turns;
}`;
const W12_II = `Console.WriteLine("Grub falls in " + TurnsToFall(10, 3) + " turns.");`;

// ---------------------------------------------------------------- wr-proc
const W13_I = `int Clamp(int value, int low, int high)
{
    if (value < low) return low;
    else if (value > high) return high;
    else return value;
}`;
const W13_II = `Console.WriteLine(Clamp(14, 0, 10));
Console.WriteLine(Clamp(-3, 0, 10));
Console.WriteLine(Clamp(6, 0, 10));`;

const W14_I = `string WinnerName(string a, int aHp, string b, int bHp)
{
    if (aHp > bHp) return a;
    else if (bHp > aHp) return b;
    else return "nobody";
}`;
const W14_II = `Console.WriteLine(WinnerName("Rook", 6, "Grub", 9));
Console.WriteLine(WinnerName("Mote", 5, "Bat", 5));`;

const W15_I = `int MonsterAt(List<int> mX, List<int> mY, int x, int y)
{
    for (int i = 0; i < mX.Count; i++)
    {
        if (mX[i] == x && mY[i] == y) return i;
    }
    return -1;
}`;
const W15_II = `List<int> mX = new List<int> { 2, 5, 5 };
List<int> mY = new List<int> { 1, 1, 3 };
Console.WriteLine(MonsterAt(mX, mY, 5, 3));
Console.WriteLine(MonsterAt(mX, mY, 4, 4));`;
const W15_HEAD = `List<int> mX = new List<int> { 2, 5, 5 };
List<int> mY = new List<int> { 1, 1, 3 };
Console.WriteLine(MonsterAt(mX, mY, 5, 3));
Console.WriteLine(MonsterAt(mX, mY, 4, 4));`;

// ---------------------------------------------------------------- wr-params
const W16_I = `int ShotPower(string weapon)
{
    if (weapon == "bow") return 4;
    else if (weapon == "spear") return 3;
    else if (weapon == "sling") return 2;
    return 1;
}`;
const W16_II = `Console.WriteLine("Rook fires the bow for " + ShotPower("bow") + ".");
Console.WriteLine("Mote throws a stone for " + ShotPower("stone") + ".");`;

const W17_I = `string HealthBar(string name, int hp, int maxHp)
{
    string bar = "";
    for (int i = 0; i < maxHp; i++)
    {
        if (i < hp) bar = bar + "#";
        else bar = bar + "-";
    }
    return $"{name,-8} [{bar}] {hp}/{maxHp}";
}`;
const W17_II = `Console.WriteLine(HealthBar("Rook", 7, 10));
Console.WriteLine(HealthBar("Grub", 2, 5));`;

const W18_I = `int PartyAttack(List<int> attack, List<int> health)
{
    int total = 0;
    for (int i = 0; i < attack.Count; i++)
    {
        if (health[i] > 0)
        {
            total = total + attack[i];
        }
    }
    return total;
}`;
const W18_II = `List<int> heroAttack = new List<int> { 5, 3, 4 };
List<int> heroHealth = new List<int> { 5, 0, 8 };
List<int> mAttack = new List<int> { 2, 6 };
List<int> mHealth = new List<int> { 4, 3 };
Console.WriteLine("Heroes: " + PartyAttack(heroAttack, heroHealth));
Console.WriteLine("Monsters: " + PartyAttack(mAttack, mHealth));`;

// ---------------------------------------------------------------- wr-logic
const W19_I = `List<int> mHealth = new List<int>();
mHealth.Add(2);
mHealth.Add(0);
mHealth.Add(0);`;
const W19_II = `bool AllDefeated(List<int> mHealth)
{
    for (int i = 0; i < mHealth.Count; i++)
    {
        if (mHealth[i] > 0)
        {
            return false;
        }
    }
    return true;
}`;
const W19_CALL = "Console.WriteLine(AllDefeated(mHealth));";
const W19_HEAD = `List<int> mHealth = new List<int> { 2, 0, 0 };
List<int> fallen = new List<int> { 0, 0, 0 };
List<int> lastStands = new List<int> { 0, 0, 1 };
Console.WriteLine(AllDefeated(mHealth) + " " + AllDefeated(fallen) + " " + AllDefeated(lastStands));`;

const W20_I = `List<int> health = new List<int>();
health.Add(6);
health.Add(0);
health.Add(4);`;
const W20_II = `void HealAll(List<int> health, int amount)
{
    for (int i = 0; i < health.Count; i++)
    {
        if (health[i] > 0)
        {
            health[i] = health[i] + amount;
        }
    }
}`;
const W20_CALL = "HealAll(health, 3);";
const W20_HEAD = `List<int> health = new List<int> { 6, 0, 4 };
HealAll(health, 3);
Console.WriteLine(health[0] + " " + health[1] + " " + health[2]);`;

export default {
  items: [
    // ---------------------------------------------------------------- Written response: the outcome of a call (2024 Set 2, 2(b))
    {
      id: "q4-w01", skill: "wr-calls", type: "wr",
      source: "2024 exam, Set 2, question 2(b)",
      labels: PROC,
      listI: W01_I,
      listII: W01_II,
      prompt: PROMPT_CALLS,
      rows: [
        {
          name: "The outcome of the call in Procedure (ii)",
          levels: [
            "Missing, or about Damage in general with nothing about the arguments 7 and 3.",
            "Says Damage subtracts the defense, but not what this call gives or prints.",
            "Damage(7, 3) returns 4, so dealt is 4 and the line prints Rook hits Grub for 4.",
          ],
        },
        {
          name: "A new call with the same outcome, and why",
          levels: [
            "Missing, the same arguments again, or a call that gives a different number (like Damage(3, 7), which gives 1).",
            "A call that does give 4, with no reason, or a reason with no call.",
            "A call such as Damage(10, 6), with the reason: dealt is attackPower - defense, 10 - 6 is also 4, and 4 is not below 1, so nothing raises it.",
          ],
        },
      ],
      model: "The call Damage(7, 3) is meant to find how much damage Rook does to Grub. dealt is 7 - 3, which is 4, and 4 is not less than 1, so Damage returns 4. The program prints Rook hits Grub for 4.\n\nA new call with different arguments is Damage(10, 6). Damage only uses the difference between attackPower and defense, and 10 - 6 is also 4. That is not less than 1, so the if does not change it, and Damage returns 4. The line prints Rook hits Grub for 4. again.",
      note: NOTE_CALLS,
      facts: "Damage(7, 3) and Damage(10, 6) both give 4, so both print Rook hits Grub for 4. Damage(3, 7) gives 1, not 4: 3 - 7 is -4, and the if raises anything below 1 to 1.",
      verify: {
        cases: [
          { run: `${W01_II}\n${W01_I}`, out: "Rook hits Grub for 4." },
          { run: `int dealt = Damage(10, 6);
Console.WriteLine("Rook hits Grub for " + dealt + ".");
Console.WriteLine(Damage(3, 7));
${W01_I}`, out: "Rook hits Grub for 4.\n1" },
        ],
      },
    },
    {
      id: "q4-w02", skill: "wr-calls", type: "wr",
      source: "2024 exam, Set 2, question 2(b)",
      labels: PROC,
      listI: W02_I,
      listII: W02_II,
      prompt: PROMPT_CALLS,
      rows: [
        {
          name: "The outcome of the call in Procedure (ii)",
          levels: [
            "Missing, or about StrongestIndex in general with nothing about mAttack.",
            "Says it finds the strongest monster, but not what this call returns or prints, or gives the value 6 as what it returns.",
            "StrongestIndex(mAttack) returns 2, the index of the highest attack, 6, so the line prints Ogre attacks first.",
          ],
        },
        {
          name: "A new call with the same outcome, and why",
          levels: [
            "Missing, the same list again, or a list whose highest attack is somewhere else (like { 6, 3, 2, 4 }, which gives 0).",
            "A list that does give 2, with no reason, or a reason with no call.",
            "A new list as the argument, such as StrongestIndex(new List<int> { 3, 1, 8, 5 }), with the reason: the function returns where the highest attack is, not what it is, and 8 is at index 2.",
          ],
        },
      ],
      model: "The call StrongestIndex(mAttack) is meant to find which monster attacks first. It returns the index of the highest attack. The highest attack in mAttack is 6, at index 2, so first is 2 and mNames[2] is Ogre. The program prints Ogre attacks first.\n\nA new call is StrongestIndex(new List<int> { 3, 1, 8, 5 }). StrongestIndex returns the position of the highest attack, not the attack itself. In this list the highest attack is 8, and it is also at index 2, so the call returns 2. first is 2, and the line still prints Ogre attacks first.",
      note: NOTE_CALLS,
      facts: "StrongestIndex(mAttack) is 2, and the line prints Ogre attacks first. StrongestIndex(new List<int> { 3, 1, 8, 5 }) is also 2. A list with the same highest attack, 6, in a different place, StrongestIndex(new List<int> { 6, 3, 2, 4 }), is 0, and the line would print Grub attacks first.",
      verify: {
        cases: [
          { run: `${W02_II}\n${W02_I}`, out: "Ogre attacks first." },
          { run: `List<string> mNames = new List<string> { "Grub", "Bat", "Ogre", "Bat" };
int first = StrongestIndex(new List<int> { 3, 1, 8, 5 });
Console.WriteLine(first + " " + mNames[first] + " attacks first.");
int other = StrongestIndex(new List<int> { 6, 3, 2, 4 });
Console.WriteLine(other + " " + mNames[other] + " attacks first.");
${W02_I}`, out: "2 Ogre attacks first.\n0 Grub attacks first." },
        ],
      },
    },
    {
      id: "q4-w03", skill: "wr-calls", type: "wr",
      source: "2024 exam, Set 2, question 2(b)",
      labels: PROC,
      listI: W03_I,
      listII: W03_II,
      prompt: PROMPT_CALLS,
      rows: [
        {
          name: "The outcome of the call in Procedure (ii)",
          levels: [
            "Missing, or about Welcome in general with nothing about \"Mote\" and 3.",
            "Says it prints a welcome, but not the line this call prints.",
            "Welcome(\"Mote\", 3) prints Mote steps onto floor 3.",
          ],
        },
        {
          name: "A new call with the same outcome, or why there is none",
          levels: [
            "Missing, or a call claimed to work that prints a different line (like Welcome(\"Rook\", 3)).",
            "Says it is not possible, with no reason from the code.",
            "Not possible: name and floor are both printed exactly as they are passed, so any different value for either one changes the line.",
          ],
        },
      ],
      model: "The call Welcome(\"Mote\", 3) is meant to tell the player that Mote has reached floor 3. It prints Mote steps onto floor 3.\n\nIt is not possible to write a new call with a different argument that prints the same line. Welcome prints name and floor exactly as they are passed, with nothing else done to them. A different name, like \"Rook\", prints Rook in the line, and a different floor, like 4, prints 4. Any change to either argument shows up in the output.",
      note: NOTE_CALLS,
      facts: "Welcome(\"Mote\", 3) prints Mote steps onto floor 3. Welcome(\"Rook\", 3) prints Rook steps onto floor 3. Welcome(\"Mote\", 4) prints Mote steps onto floor 4.",
      verify: {
        cases: [
          { run: `${W03_II}\n${W03_I}`, out: "Mote steps onto floor 3." },
          { run: `Welcome("Rook", 3);
Welcome("Mote", 4);
${W03_I}`, out: "Rook steps onto floor 3.\nMote steps onto floor 4." },
        ],
      },
    },

    // ---------------------------------------------------------------- Written response: new elements at the end (2025 Set 1, 2(c))
    {
      id: "q4-w04", skill: "wr-grows", type: "wr",
      source: "2025 exam, Set 1, question 2(c)",
      listI: W04_I,
      listII: W04_II,
      call: W04_CALL,
      prompt: PROMPT_GROWS,
      rows: [
        {
          name: "What List (ii) does with the new elements",
          levels: [
            "Missing, or says CountAlive must be rewritten.",
            "\"No change is needed,\" with nothing about what happens to the new monsters.",
            "No change is needed: CountAlive checks the new monsters too, and counts each one with health above 0.",
          ],
        },
        {
          name: "Why, from the code",
          levels: [
            "Missing, or a reason that is not about CountAlive.",
            "Vague: \"the loop goes through the list.\"",
            "The loop runs while i < health.Count. Count grows when monsters are added, so the loop gets one more pass for each new monster, with no number in the code to change.",
          ],
        },
      ],
      model: "No change to CountAlive is needed. The loop condition is i < health.Count, and health.Count is how many monsters are in the list right now. If another programmer adds three more monsters to the end of mHealth, health.Count goes from 4 to 7, so the loop makes 7 passes and checks every new monster with the same if. Any new monster with health above 0 is counted.",
      note: NOTE_GROWS,
      facts: "CountAlive(mHealth) is 3. After mHealth.Add(6); mHealth.Add(0); mHealth.Add(5); the same call gives 5, with no change to CountAlive.",
      verify: {
        cases: [
          { run: `${W04_I}\n${W04_CALL}\nmHealth.Add(6);\nmHealth.Add(0);\nmHealth.Add(5);\n${W04_CALL}\n${W04_II}`, out: "3 monsters still stand.\n5 monsters still stand." },
        ],
      },
    },
    {
      id: "q4-w05", skill: "wr-grows", type: "wr",
      source: "2025 exam, Set 1, question 2(c)",
      listI: W05_I,
      listII: W05_II,
      call: W05_CALL,
      prompt: PROMPT_GROWS,
      rows: [
        {
          name: "What List (ii) does with the new elements",
          levels: [
            "Missing, or says FindCharacter needs a new if for each new name.",
            "\"No change is needed,\" with nothing about whether the new names can be found.",
            "No change is needed: FindCharacter can find a name added at the end and returns its new index, like 3 for the fourth name.",
          ],
        },
        {
          name: "Why, from the code",
          levels: [
            "Missing, or a reason that is not about FindCharacter.",
            "Vague: \"the loop checks everything.\"",
            "The loop runs while i < names.Count, so it reaches every index up to the new last one, and the same if compares each name with the one asked for.",
          ],
        },
      ],
      model: "No change to FindCharacter is needed. Its loop runs while i < names.Count, and Count is always how many names are in the list. If another programmer adds Hero and Wren to the end, names.Count becomes 4, so the loop also checks index 2 and index 3 with the same if. FindCharacter(names, \"Wren\") would return 3, and a name that is still missing returns -1 after every index has been checked.",
      note: NOTE_GROWS,
      facts: "FindCharacter(names, \"Mote\") is 1. Before anything is added, FindCharacter(names, \"Wren\") is -1. After names.Add(\"Hero\"); names.Add(\"Wren\"); the same function gives 3 for Wren, and still 1 for Mote.",
      verify: {
        cases: [
          { run: `${W05_I}\n${W05_CALL}\nConsole.WriteLine(FindCharacter(names, "Wren"));\nnames.Add("Hero");\nnames.Add("Wren");\nConsole.WriteLine(FindCharacter(names, "Wren"));\n${W05_CALL}\n${W05_II}`, out: "1\n-1\n3\n1" },
        ],
      },
    },
    {
      id: "q4-w06", skill: "wr-grows", type: "wr",
      source: "2025 exam, Set 1, question 2(c)",
      listI: W06_I,
      listII: W06_II,
      call: W06_CALL,
      prompt: PROMPT_GROWS,
      rows: [
        {
          name: "What must change in List (ii)",
          levels: [
            "Missing, or \"no change is needed.\"",
            "Fixes only one of the two lines, or says the loop must change without saying how.",
            "Both: i < 3 becomes i < names.Count, and names[2] becomes names[names.Count - 1].",
          ],
        },
        {
          name: "Why, from the code",
          levels: [
            "Missing, or a reason that is not about ShowParty.",
            "Says the new names would be left out, without saying which line leaves them out.",
            "The loop stops when i is 3, so the new names are never printed, and names[2] is always Hero, not the new last name. Count changes with the list, so both lines keep up.",
          ],
        },
      ],
      model: "ShowParty has to change in two places, because it uses fixed numbers. The loop runs while i < 3, so it always prints three names. If another programmer adds Wren and Bram to the end, they are never printed. The last line uses names[2], which is always Hero, so it would still say Hero is last in line.\n\nI would change i < 3 to i < names.Count, so the loop makes one pass for every name in the list. I would change names[2] to names[names.Count - 1], which is always the last index, so it prints Bram.",
      note: NOTE_GROWS,
      facts: "With Wren and Bram added, the code as written still prints 1. Rook, 2. Mote, 3. Hero, and Last in line: Hero. With both changes it prints five numbered names and Last in line: Bram.",
      verify: {
        cases: [
          { run: `${W06_I}\n${W06_CALL}\n${W06_II}`, out: "1. Rook\n2. Mote\n3. Hero\nLast in line: Hero" },
          { run: `${W06_I}\nnames.Add("Wren");\nnames.Add("Bram");\n${W06_CALL}\n${W06_II}`, out: "1. Rook\n2. Mote\n3. Hero\nLast in line: Hero" },
          { run: `${W06_I}\nnames.Add("Wren");\nnames.Add("Bram");\n${W06_CALL}\n${W06_FIXED}`, out: "1. Rook\n2. Mote\n3. Hero\n4. Wren\n5. Bram\nLast in line: Bram" },
        ],
      },
    },

    // ---------------------------------------------------------------- Written response: checkValidity (2024 Set 1, 2(c))
    {
      id: "q4-w07", skill: "wr-validity", type: "wr",
      source: "2024 exam, Set 1, question 2(c)",
      listI: W07_I,
      listII: W07_II,
      call: W07_CALL,
      prompt: PROMPT_VALIDITY,
      rows: [
        {
          name: "Visits every element and passes each one to checkValidity",
          levels: [
            "Missing, checks only one spell, or passes the index i (or the whole list) to checkValidity.",
            "Loops over spells, but too vague to code: no start or stop, or it is unclear what is passed.",
            "Starts i at 0 and keeps going while i < spells.Count, calling checkValidity(spells[i]) on each pass.",
          ],
        },
        {
          name: "Returns the right answer at the right time",
          levels: [
            "Missing, or returns true as soon as one spell is valid.",
            "Returns false for an invalid spell, but does not say when true is returned, or returns true inside the loop.",
            "Returns false as soon as one call gives false, and returns true only after the loop has checked every spell.",
          ],
        },
      ],
      model: "1. Write a procedure AllValid that takes the list spells.\n2. Set i to 0.\n3. While i is less than spells.Count, call checkValidity(spells[i]). This passes the spell itself, like \"frost\", not the number i.\n4. If that call returns false, stop and return false. One invalid spell is enough.\n5. If it returns true, add 1 to i and go back to step 3.\n6. When the loop ends, every spell has been checked and none was invalid, so return true.",
      note: NOTE_VALIDITY,
      facts: "A C# version of these steps, with a stand-in checkValidity that accepts spells of 1 to 6 letters, gives True for spark, frost, mend. After spells.Add(\"thunderclap\"); it gives False. Calling checkValidity(i) instead of checkValidity(spells[i]) does not build (CS1503): i is an int, and checkValidity here takes a string.",
      verify: {
        cases: [
          { run: `${W07_I}\n${W07_CALL}\n${W07_II}`, out: "Mote casts spark.\nMote casts frost.\nMote casts mend." },
          { run: `${W07_I}\nConsole.WriteLine(AllValid(spells));\nspells.Add("thunderclap");\nConsole.WriteLine(AllValid(spells));\n${W07_ALL}`, out: "True\nFalse" },
          { run: `List<string> spells = new List<string> { "spark", "frost", "mend" };
Console.WriteLine(AllValid(spells));
bool AllValid(List<string> spells)
{
    for (int i = 0; i < spells.Count; i++)
    {
        if (checkValidity(i) == false)
        {
            return false;
        }
    }
    return true;
}
bool checkValidity(string value)
{
    return value.Length >= 1 && value.Length <= 6;
}`, error: "CS1503" },
        ],
      },
    },
    {
      id: "q4-w08", skill: "wr-validity", type: "wr",
      source: "2024 exam, Set 1, question 2(c)",
      listI: W08_I,
      listII: W08_II,
      call: W08_CALL,
      prompt: PROMPT_VALIDITY,
      rows: [
        {
          name: "Visits every element and passes each one to checkValidity",
          levels: [
            "Missing, checks only one health, or passes the index i (or the whole list) to checkValidity.",
            "Loops over health, but too vague to code: no start or stop, or it is unclear what is passed.",
            "Starts i at 0 and keeps going while i < health.Count, calling checkValidity(health[i]) on each pass.",
          ],
        },
        {
          name: "Returns the right answer at the right time",
          levels: [
            "Missing, or returns true as soon as one health is valid.",
            "Returns false for an invalid health, but does not say when true is returned, or returns true inside the loop.",
            "Returns false as soon as one call gives false, and returns true only after the loop has checked every health.",
          ],
        },
      ],
      model: "1. Write a procedure AllValid that takes the list health.\n2. Set i to 0.\n3. While i is less than health.Count, call checkValidity(health[i]). This passes the health value, like 7, not the index i.\n4. If that call returns false, stop and return false right away.\n5. If it returns true, add 1 to i and go back to step 3.\n6. Only after the loop has finished, return true, because every health was checked and all of them were valid.",
      note: NOTE_VALIDITY,
      facts: "A C# version of these steps, with a stand-in checkValidity that accepts a health from 0 to 10, gives True for 10, 7, 8 and False for 10, 25, 8. Passing i instead of health[i] still builds, since both are ints, but it checks 0, 1, and 2 and gives True for 10, 25, 8. Returning true inside the loop as soon as one call is true also gives True for 10, 25, 8: it never looks at the 25.",
      verify: {
        cases: [
          { run: `${W08_I}\n${W08_CALL}\n${W08_II}`, out: "1" },
          { run: `${W08_I}
Console.WriteLine(AllValid(health));
Console.WriteLine(AllValid(new List<int> { 10, 25, 8 }));
bool AllValid(List<int> health)
{
    for (int i = 0; i < health.Count; i++)
    {
        if (checkValidity(health[i]) == false)
        {
            return false;
        }
    }
    return true;
}
${W08_CHECK}`, out: "True\nFalse" },
          { run: `Console.WriteLine(ByIndex(new List<int> { 10, 25, 8 }));
Console.WriteLine(TrueTooSoon(new List<int> { 10, 25, 8 }));
bool ByIndex(List<int> health)
{
    for (int i = 0; i < health.Count; i++)
    {
        if (checkValidity(i) == false)
        {
            return false;
        }
    }
    return true;
}
bool TrueTooSoon(List<int> health)
{
    for (int i = 0; i < health.Count; i++)
    {
        if (checkValidity(health[i]) == false)
        {
            return false;
        }
        else
        {
            return true;
        }
    }
    return true;
}
${W08_CHECK}`, out: "True\nTrue", warning: "CS0162" },
        ],
      },
    },
    {
      id: "q4-w09", skill: "wr-validity", type: "wr",
      source: "2024 exam, Set 1, question 2(c)",
      listI: W09_I,
      listII: W09_II,
      call: W09_CALL,
      prompt: PROMPT_VALIDITY,
      rows: [
        {
          name: "Visits every element and passes each one to checkValidity",
          levels: [
            "Missing, checks only one row, passes the index y, or passes single tiles (level[y][x]) when the elements are whole rows.",
            "Loops over level, but too vague to code: no start or stop, or it is unclear what is passed.",
            "Starts y at 0 and keeps going while y < level.Count, calling checkValidity(level[y]) on each pass, so each call gets one whole row.",
          ],
        },
        {
          name: "Returns the right answer at the right time",
          levels: [
            "Missing, or returns true as soon as one row is valid.",
            "Returns false for an invalid row, but does not say when true is returned, or returns true inside the loop.",
            "Returns false as soon as one call gives false, and returns true only after the loop has checked every row.",
          ],
        },
      ],
      model: "Each element of level is a whole row, a string like \"#@..$.#\", so checkValidity is given one row at a time. One loop over the rows is enough.\n1. Write a procedure AllValid that takes the list level.\n2. Set y to 0.\n3. While y is less than level.Count, call checkValidity(level[y]), which passes the whole row at index y, not the number y and not one tile.\n4. If that call returns false, stop and return false.\n5. If it returns true, add 1 to y and go back to step 3.\n6. When the loop ends, all the rows were valid, so return true.",
      note: NOTE_VALIDITY,
      facts: "A C# version of these steps, with a stand-in checkValidity that accepts a row starting and ending with #, gives True for this level. After level.Add(\"#..$..\"); it gives False. Passing one tile, checkValidity(level[y][x]), does not build (CS1503): level[y][x] is a char, and each element of the list is a string.",
      verify: {
        cases: [
          { run: `${W09_I}\n${W09_CALL}\n${W09_II}`, out: "2" },
          { run: `${W09_I}\nConsole.WriteLine(AllValid(level));\nlevel.Add("#..$..");\nConsole.WriteLine(AllValid(level));\n${W09_ALL}`, out: "True\nFalse" },
          { run: `List<string> level = new List<string> { "#######", "#@..$.#" };
Console.WriteLine(AllValid(level));
bool AllValid(List<string> level)
{
    for (int y = 0; y < level.Count; y++)
    {
        for (int x = 0; x < level[y].Length; x++)
        {
            if (checkValidity(level[y][x]) == false)
            {
                return false;
            }
        }
    }
    return true;
}
bool checkValidity(string value)
{
    return value.Length > 0 && value[0] == '#' && value[value.Length - 1] == '#';
}`, error: "CS1503" },
        ],
      },
    },

    // ---------------------------------------------------------------- Written response: what stops the loop (2026, 2(a))
    {
      id: "q4-w10", skill: "wr-algo", type: "wr",
      source: "2026 exam, question 2(a)",
      labels: PROC,
      listI: W10_I,
      listII: W10_II,
      prompt: PROMPT_ALGO,
      rows: [
        {
          name: "The variables that decide when it stops",
          levels: [
            "Missing, or names something that does not control the loop (health, or the argument party).",
            "Names only one of the two: i, or names.Count.",
            "i and names.Count, the two sides of the condition i < names.Count.",
          ],
        },
        {
          name: "Values that stop it, and why",
          levels: [
            "Missing, or values that would not stop it (like i is 2).",
            "Gives values with no reason, or a reason with no values.",
            "For this call names.Count is 3, so when i becomes 3, 3 < 3 is false and the loop ends after Hero's line.",
          ],
        },
      ],
      model: "The first iteration statement is the for loop in PartyReport. The variables that decide when it stops are i and names.Count, because the loop keeps going only while i < names.Count.\n\nIn the call in Procedure (ii), names.Count is 3. i starts at 0 and goes up by 1 after each pass. After the pass for Hero, i becomes 3. Then 3 < 3 is false, so the loop stops. Every hero has had exactly one line printed.",
      note: NOTE_ALGO,
      facts: "PartyReport(party, partyHealth) prints Rook is up with 6., Mote is down., and Hero is up with 8. A copy that prints i after the loop shows the loop stopped when i was 3 and names.Count was 3.",
      verify: {
        cases: [
          { run: `${W10_II}\n${W10_I}`, out: "Rook is up with 6.\nMote is down.\nHero is up with 8." },
          { run: `List<string> names = new List<string> { "Rook", "Mote", "Hero" };
int i = 0;
for (i = 0; i < names.Count; i++)
{
}
Console.WriteLine("stopped with i = " + i + " and names.Count = " + names.Count);`, out: "stopped with i = 3 and names.Count = 3" },
        ],
      },
    },
    {
      id: "q4-w11", skill: "wr-algo", type: "wr",
      source: "2026 exam, question 2(a)",
      labels: PROC,
      listI: W11_I,
      listII: W11_II,
      prompt: PROMPT_ALGO,
      rows: [
        {
          name: "The variables that decide when it stops",
          levels: [
            "Missing, or names something that does not control the loop (the argument mHealth).",
            "Names i and health.Count, but not health[i], the value the return depends on (or the reverse).",
            "i and health.Count from the condition, and health[i], because the return inside the loop ends it as soon as IsAlive(health[i]) is true.",
          ],
        },
        {
          name: "Values that stop it, and why",
          levels: [
            "Missing, or values that would not stop it.",
            "Gives values with no reason, or a reason with no values.",
            "For this call it stops when i is 2: health[2] is 5, IsAlive(5) is true, and return i leaves the loop and the procedure. With no one alive, it stops when i reaches health.Count, since i < health.Count is false.",
          ],
        },
      ],
      model: "The first iteration statement is the for loop in NextAliveIndex. It can stop in two ways, so three things decide it: i, health.Count, and health[i].\n\nIn the call in Procedure (ii), health is 0, 0, 5, 8. When i is 0 and 1, health[i] is 0, IsAlive gives false, and the loop goes on. When i is 2, health[2] is 5, IsAlive(5) is true, and return i runs. A return leaves the procedure, so the loop stops there and NextAliveIndex returns 2.\n\nIf every health were 0, the return would never run. Then the loop stops when i becomes health.Count, 4, because 4 < 4 is false, and the procedure returns -1.",
      note: NOTE_ALGO,
      facts: "NextAliveIndex(mHealth) is 2. For 0, 0, 0, 0 it is -1, after the loop has run to i = 4.",
      verify: {
        cases: [
          { run: `${W11_II}\n${W11_I}\n${IS_ALIVE}`, out: "2" },
          { run: `Console.WriteLine(NextAliveIndex(new List<int> { 0, 0, 0, 0 }));
${W11_I}
${IS_ALIVE}`, out: "-1" },
        ],
      },
    },
    {
      id: "q4-w12", skill: "wr-algo", type: "wr",
      source: "2026 exam, question 2(a)",
      labels: PROC,
      listI: W12_I,
      listII: W12_II,
      prompt: PROMPT_ALGO,
      rows: [
        {
          name: "The variables that decide when it stops",
          levels: [
            "Missing, or names turns, which never stops the loop.",
            "Names dealt, which only changes how fast hp drops, without hp.",
            "hp, the variable in the condition hp > 0, which goes down by dealt on every pass.",
          ],
        },
        {
          name: "Values that stop it, and why",
          levels: [
            "Missing, or values that would not stop it (like hp is 1).",
            "Gives values with no reason, or a reason with no values.",
            "Any hp of 0 or less. For this call hp goes 10, 7, 4, 1, then -2, and -2 > 0 is false, so the loop stops after 4 passes.",
          ],
        },
      ],
      model: "The first iteration statement is the while loop in TurnsToFall. The variable that decides when it stops is hp, because the loop runs only while hp > 0.\n\nAny value of hp that is 0 or less stops it. In the call TurnsToFall(10, 3), hp starts at 10 and drops by 3 each pass: 7, then 4, then 1, then -2. When hp is -2, the condition -2 > 0 is false, so the loop stops. It made 4 passes, so turns is 4 and the line prints Grub falls in 4 turns.",
      note: NOTE_ALGO,
      facts: "The line prints Grub falls in 4 turns. A copy that prints hp after each pass shows 7, 4, 1, -2.",
      verify: {
        cases: [
          { run: `${W12_II}\n${W12_I}`, out: "Grub falls in 4 turns." },
          { run: `int hp = 10;
int dealt = 3;
while (hp > 0)
{
    hp = hp - dealt;
    Console.WriteLine(hp);
}`, out: "7\n4\n1\n-2" },
        ],
      },
    },

    // ---------------------------------------------------------------- Written response: a logic error in the procedure (2025 Set 1, 2(b))
    {
      id: "q4-w13", skill: "wr-proc", type: "wr",
      source: "2025 exam, Set 1, question 2(b)",
      labels: PROC,
      listI: W13_I,
      listII: W13_II,
      prompt: PROMPT_PROC,
      rows: [
        {
          name: "A modification inside the procedure that still builds",
          levels: [
            "None, a change that does not build (a missing semicolon or brace), or a change to the calls in Procedure (ii) instead of Clamp.",
            "A change too vague to try (\"change the ifs\").",
            "A specific change inside Clamp that builds and runs.",
          ],
        },
        {
          name: "How the behavior changes",
          levels: [
            "Missing, or the result described is not what the changed code does.",
            "Says Clamp would be wrong, without saying what it returns now.",
            "Says what Clamp returns now for a call, and what it should return.",
          ],
        },
      ],
      model: "The other programmer could swap the two returns, so the first line says return high and the second says return low. It still builds and runs, but now a value that is too low comes back as the high limit, and a value that is too high comes back as the low limit. Clamp(14, 0, 10) returns 0 instead of 10, and Clamp(-3, 0, 10) returns 10 instead of 0. A value in range, like 6, still comes back as 6, so the error only shows at the edges.",
      note: NOTE_PROC,
      factsTable: [
        ["return high; and return low; swapped", "0, 10, 6: the two limits come back the wrong way around"],
        ["else return value; changed to else return high;", "10, 0, 10: a value in range comes back as 10"],
        ["value < low changed to value < high", "10, 0, 0: 6 is below 10, so it comes back as 0"],
        [">= in place of > in the second test", "10, 0, 6, the same as before: a value equal to high returns high either way, so this is not a logic error"],
      ],
      verify: {
        cases: [
          { run: `${W13_II}\n${W13_I}`, out: "10\n0\n6" },
          { run: `${W13_II}
int Clamp(int value, int low, int high)
{
    if (value < low) return high;
    else if (value > high) return low;
    else return value;
}`, out: "0\n10\n6" },
          { run: `${W13_II}
int Clamp(int value, int low, int high)
{
    if (value < low) return low;
    else if (value > high) return high;
    else return high;
}`, out: "10\n0\n10" },
          { run: `${W13_II}
int Clamp(int value, int low, int high)
{
    if (value < high) return low;
    else if (value > high) return high;
    else return value;
}`, out: "10\n0\n0" },
          { run: `${W13_II}
Console.WriteLine(Clamp(10, 0, 10));
int Clamp(int value, int low, int high)
{
    if (value < low) return low;
    else if (value >= high) return high;
    else return value;
}`, out: "10\n0\n6\n10" },
        ],
      },
    },
    {
      id: "q4-w14", skill: "wr-proc", type: "wr",
      source: "2025 exam, Set 1, question 2(b)",
      labels: PROC,
      listI: W14_I,
      listII: W14_II,
      prompt: PROMPT_PROC,
      rows: [
        {
          name: "A modification inside the procedure that still builds",
          levels: [
            "None, a change that does not build (a missing semicolon or brace), or a change to the calls in Procedure (ii) instead of WinnerName.",
            "A change too vague to try (\"change the comparisons\").",
            "A specific change inside WinnerName that builds and runs.",
          ],
        },
        {
          name: "How the behavior changes",
          levels: [
            "Missing, or the result described is not what the changed code does.",
            "Says the wrong winner would show, without saying which call or what it returns.",
            "Says what WinnerName returns now for a call, and what it should return.",
          ],
        },
      ],
      model: "The other programmer could change aHp > bHp to aHp >= bHp in the first if. It still builds and runs, and most fights come out the same, but a tie now goes to the first fighter. WinnerName(\"Mote\", 5, \"Bat\", 5) returns Mote instead of nobody, so the game says Mote won a fight that was even. The else at the end can never be reached by any call.",
      note: NOTE_PROC,
      factsTable: [
        ["aHp >= bHp in the first if", "Grub, then Mote: a tie goes to the first fighter"],
        ["return b; changed to return a;", "Rook, then nobody: Rook wins with 6 against 9"],
        ["aHp < bHp in the first if", "Rook, then nobody: the lower health wins"],
        ["return \"nobody\"; changed to return b;", "Grub, then Bat: a tie goes to the second fighter"],
      ],
      verify: {
        cases: [
          { run: `${W14_II}\n${W14_I}`, out: "Grub\nnobody" },
          { run: `${W14_II}
string WinnerName(string a, int aHp, string b, int bHp)
{
    if (aHp >= bHp) return a;
    else if (bHp > aHp) return b;
    else return "nobody";
}`, out: "Grub\nMote" },
          { run: `${W14_II}
string WinnerName(string a, int aHp, string b, int bHp)
{
    if (aHp > bHp) return a;
    else if (bHp > aHp) return a;
    else return "nobody";
}`, out: "Rook\nnobody" },
          { run: `${W14_II}
string WinnerName(string a, int aHp, string b, int bHp)
{
    if (aHp < bHp) return a;
    else if (bHp > aHp) return b;
    else return "nobody";
}`, out: "Rook\nnobody" },
          { run: `${W14_II}
string WinnerName(string a, int aHp, string b, int bHp)
{
    if (aHp > bHp) return a;
    else if (bHp > aHp) return b;
    else return b;
}`, out: "Grub\nBat" },
        ],
      },
    },
    {
      id: "q4-w15", skill: "wr-proc", type: "wr",
      source: "2025 exam, Set 1, question 2(b)",
      labels: PROC,
      listI: W15_I,
      listII: W15_II,
      prompt: PROMPT_PROC,
      rows: [
        {
          name: "A modification inside the procedure that still builds",
          levels: [
            "None, a change that does not build (a missing semicolon or brace), or a change to the lists or calls in Procedure (ii) instead of MonsterAt.",
            "A change too vague to try (\"change the if\").",
            "A specific change inside MonsterAt that builds and runs.",
          ],
        },
        {
          name: "How the behavior changes",
          levels: [
            "Missing, or the result described is not what the changed code does.",
            "Says the wrong monster would be found, without saying which call or what it returns.",
            "Says what MonsterAt returns now for a call, and what it should return.",
          ],
        },
      ],
      model: "The other programmer could change && to || in the if. It still builds and runs, but now a monster matches if only its x or only its y is right. MonsterAt(mX, mY, 5, 3) returns 1 instead of 2: the monster at index 1 is at x 5 but y 1, and it is checked first. The hero would hit a monster two squares away instead of the one that is really at 5, 3.",
      note: NOTE_PROC,
      factsTable: [
        ["|| in place of &&", "1, then -1: the monster at 5, 1 is found for the square 5, 3"],
        ["mX[i] == y && mY[i] == x", "-1, then -1: x and y are swapped, so the monster at 5, 3 is missed"],
        ["i < mX.Count - 1", "-1, then -1: the last monster, at index 2, is never checked"],
        ["return -1; changed to return 0;", "2, then 0: an empty square reports the first monster"],
      ],
      verify: {
        cases: [
          { run: `${W15_II}\n${W15_I}`, out: "2\n-1" },
          { run: `${W15_HEAD}
int MonsterAt(List<int> mX, List<int> mY, int x, int y)
{
    for (int i = 0; i < mX.Count; i++)
    {
        if (mX[i] == x || mY[i] == y) return i;
    }
    return -1;
}`, out: "1\n-1" },
          { run: `${W15_HEAD}
int MonsterAt(List<int> mX, List<int> mY, int x, int y)
{
    for (int i = 0; i < mX.Count; i++)
    {
        if (mX[i] == y && mY[i] == x) return i;
    }
    return -1;
}`, out: "-1\n-1" },
          { run: `${W15_HEAD}
int MonsterAt(List<int> mX, List<int> mY, int x, int y)
{
    for (int i = 0; i < mX.Count - 1; i++)
    {
        if (mX[i] == x && mY[i] == y) return i;
    }
    return -1;
}`, out: "-1\n-1" },
          { run: `${W15_HEAD}
int MonsterAt(List<int> mX, List<int> mY, int x, int y)
{
    for (int i = 0; i < mX.Count; i++)
    {
        if (mX[i] == x && mY[i] == y) return i;
    }
    return 0;
}`, out: "2\n0" },
        ],
      },
    },

    // ---------------------------------------------------------------- Written response: parameters (2024 Set 2, 2(c))
    {
      id: "q4-w16", skill: "wr-params", type: "wr",
      source: "2024 exam, Set 2, question 2(c)",
      labels: PROC,
      listI: W16_I,
      listII: W16_II,
      prompt: PROMPT_PARAMS,
      rows: [
        {
          name: "The parameter, from the procedure header",
          levels: [
            "Missing, or names the argument \"bow\" or \"stone\" instead of the parameter.",
            "Names weapon, but also lists \"bow\" or \"stone\" as parameters.",
            "weapon, the only parameter, in the header ShotPower(string weapon).",
          ],
        },
        {
          name: "How the parameter manages complexity",
          levels: [
            "Missing, or about procedures in general with nothing about ShotPower.",
            "Vague: \"it makes the code reusable,\" with nothing about what weapon changes.",
            "One procedure gives the power of any weapon: the value passed in as weapon decides which if matches, so one ShotPower replaces a separate procedure for each weapon.",
          ],
        },
      ],
      model: "The parameter is weapon, in the header int ShotPower(string weapon).\n\nweapon lets one procedure work for every weapon in the game. The value passed in as weapon decides which if matches, so ShotPower(\"bow\") returns 4 and ShotPower(\"stone\") returns 1. Without the parameter, I would need a separate procedure for each weapon, like BowPower and StonePower, with the same idea copied into each one. With it, adding a new weapon means adding one test to ShotPower, and every call already works.",
      note: NOTE_PARAMS,
      facts: "ShotPower(\"bow\") is 4, ShotPower(\"spear\") is 3, ShotPower(\"sling\") is 2, and ShotPower(\"stone\") is 1. The two lines print Rook fires the bow for 4. and Mote throws a stone for 1.",
      verify: {
        cases: [
          { run: `${W16_II}\n${W16_I}`, out: "Rook fires the bow for 4.\nMote throws a stone for 1." },
          { run: `Console.WriteLine(ShotPower("bow") + " " + ShotPower("spear") + " " + ShotPower("sling") + " " + ShotPower("stone"));
${W16_I}`, out: "4 3 2 1" },
        ],
      },
    },
    {
      id: "q4-w17", skill: "wr-params", type: "wr",
      source: "2024 exam, Set 2, question 2(c)",
      labels: PROC,
      listI: W17_I,
      listII: W17_II,
      prompt: PROMPT_PARAMS,
      rows: [
        {
          name: "The parameters, from the procedure header",
          levels: [
            "Missing, or names arguments (\"Rook\", 7, 10) or the variable bar instead of the parameters.",
            "Names some of the parameters, but not all three, or mixes in an argument.",
            "name, hp, and maxHp, from the header HealthBar(string name, int hp, int maxHp).",
          ],
        },
        {
          name: "How the parameters manage complexity",
          levels: [
            "Missing, or about procedures in general with nothing about HealthBar.",
            "Vague: \"it makes the code reusable,\" with nothing about what each parameter changes.",
            "One procedure draws the bar for any character: name is the label, hp is how many # are filled in, and maxHp is how long the bar is, so the same loop works for Rook, Grub, or anyone.",
          ],
        },
      ],
      model: "The parameters are name, hp, and maxHp, in the header string HealthBar(string name, int hp, int maxHp).\n\nThey let one procedure draw the health bar for any character. name is the label at the start of the line. maxHp sets how many passes the loop makes, so it is the length of the bar. hp decides how many of those spots are # and how many are -. HealthBar(\"Rook\", 7, 10) and HealthBar(\"Grub\", 2, 5) use the same loop and give two different bars. Without the parameters, every character and every health would need its own code to draw its bar.",
      note: NOTE_PARAMS,
      facts: "HealthBar(\"Rook\", 7, 10) gives Rook     [#######---] 7/10. HealthBar(\"Grub\", 2, 5) gives Grub     [##---] 2/5. HealthBar(\"Rook\", 3, 10) gives Rook     [###-------] 3/10.",
      verify: {
        cases: [
          { run: `${W17_II}\n${W17_I}`, out: "Rook     [#######---] 7/10\nGrub     [##---] 2/5" },
          { run: `Console.WriteLine(HealthBar("Rook", 3, 10));
${W17_I}`, out: "Rook     [###-------] 3/10" },
        ],
      },
    },
    {
      id: "q4-w18", skill: "wr-params", type: "wr",
      source: "2024 exam, Set 2, question 2(c)",
      labels: PROC,
      listI: W18_I,
      listII: W18_II,
      prompt: PROMPT_PARAMS,
      rows: [
        {
          name: "The parameters, from the procedure header",
          levels: [
            "Missing, or names heroAttack and heroHealth (or mAttack and mHealth). Those are the arguments in Procedure (ii), and naming them earns nothing.",
            "Names one of attack and health, but not both, or mixes in an argument.",
            "attack and health, from the header PartyAttack(List<int> attack, List<int> health).",
          ],
        },
        {
          name: "How the parameters manage complexity",
          levels: [
            "Missing, or about procedures in general with nothing about PartyAttack.",
            "Vague: \"it makes the code reusable,\" with nothing about what attack and health change.",
            "The same procedure adds up the attack of any side: the heroes' lists or the monsters' lists are passed in as attack and health, so one loop gives the heroes' total and the monsters' total.",
          ],
        },
      ],
      model: "The parameters are attack and health, in the header int PartyAttack(List<int> attack, List<int> health). heroAttack and heroHealth are not parameters. They are the arguments passed in by the first call.\n\nattack and health let one procedure total the attack of any group. When the heroes' lists are passed in, PartyAttack gives 9, because Mote has 0 health and is skipped. When the monsters' lists are passed in, the same loop gives 8. Without the parameters, I would need one procedure written for the heroes' lists and another written for the monsters' lists, with the same loop in both.",
      note: NOTE_PARAMS,
      facts: "PartyAttack(heroAttack, heroHealth) is 9: 5 + 4, with Mote skipped at 0 health. PartyAttack(mAttack, mHealth) is 8. Same procedure, different arguments, different results.",
      verify: {
        cases: [
          { run: `${W18_II}\n${W18_I}`, out: "Heroes: 9\nMonsters: 8" },
        ],
      },
    },

    // ---------------------------------------------------------------- Written response: a logic error in List (ii) (2025 Set 2, 2(b))
    {
      id: "q4-w19", skill: "wr-logic", type: "wr",
      source: "2025 exam, Set 2, question 2(b)",
      listI: W19_I,
      listII: W19_II,
      call: W19_CALL,
      prompt: PROMPT_LOGIC,
      rows: [
        {
          name: "A modification to List (ii) that still runs",
          levels: [
            "None, a change that does not build (a missing semicolon or brace), or a change to the list instead of AllDefeated.",
            "A change too vague to try (\"change the loop\").",
            "A specific change to AllDefeated that builds and runs.",
          ],
        },
        {
          name: "Why it is a logic error, consistent with the code",
          levels: [
            "Missing, or the result described is not what the changed code does.",
            "Says it would be wrong, without saying what comes out wrong.",
            "Says what comes out wrong and why, with what it returns for this list.",
          ],
        },
      ],
      model: "The other programmer could change int i = 0 to int i = 1. It still builds and runs, but the loop never looks at mHealth[0]. In this list that is the only monster still standing, with 2 health. AllDefeated(mHealth) returns True instead of False, so the game would say every monster is defeated while one is still fighting.",
      note: NOTE_LOGIC,
      factsTable: [
        ["int i = 1", "True for 2, 0, 0: the monster at index 0 is never checked"],
        ["mHealth[i] > 1", "True for 0, 0, 1: a monster with 1 health counts as defeated"],
        ["i < mHealth.Count - 1", "True for 0, 0, 1: the last monster is never checked"],
        ["mHealth[i] >= 0", "False for 0, 0, 0: a monster at 0 health still counts as standing, so the fight never ends"],
      ],
      verify: {
        cases: [
          { run: `${W19_I}\n${W19_CALL}\n${W19_II}`, out: "False" },
          { run: `${W19_HEAD}
bool AllDefeated(List<int> mHealth)
{
    for (int i = 1; i < mHealth.Count; i++)
    {
        if (mHealth[i] > 0)
        {
            return false;
        }
    }
    return true;
}`, out: "True True False" },
          { run: `${W19_HEAD}
bool AllDefeated(List<int> mHealth)
{
    for (int i = 0; i < mHealth.Count; i++)
    {
        if (mHealth[i] > 1)
        {
            return false;
        }
    }
    return true;
}`, out: "False True True" },
          { run: `${W19_HEAD}
bool AllDefeated(List<int> mHealth)
{
    for (int i = 0; i < mHealth.Count - 1; i++)
    {
        if (mHealth[i] > 0)
        {
            return false;
        }
    }
    return true;
}`, out: "False True True" },
          { run: `${W19_HEAD}
bool AllDefeated(List<int> mHealth)
{
    for (int i = 0; i < mHealth.Count; i++)
    {
        if (mHealth[i] >= 0)
        {
            return false;
        }
    }
    return true;
}`, out: "False False False" },
        ],
      },
    },
    {
      id: "q4-w20", skill: "wr-logic", type: "wr",
      source: "2025 exam, Set 2, question 2(b)",
      listI: W20_I,
      listII: W20_II,
      call: W20_CALL,
      prompt: PROMPT_LOGIC,
      rows: [
        {
          name: "A modification to List (ii) that still runs",
          levels: [
            "None, a change that does not build (a missing semicolon or brace), or a change to the list instead of HealAll.",
            "A change too vague to try (\"change the healing\").",
            "A specific change to HealAll that builds and runs.",
          ],
        },
        {
          name: "Why it is a logic error, consistent with the code",
          levels: [
            "Missing, or the result described is not what the changed code does.",
            "Says it would be wrong, without saying what comes out wrong.",
            "Says what comes out wrong and why, with the health values the list holds after the call.",
          ],
        },
      ],
      model: "The other programmer could change health[i] > 0 to health[i] >= 0. It still builds and runs, but now a hero with 0 health also passes the test. After HealAll(health, 3), the list is 9, 3, 7 instead of 9, 0, 7. The fallen hero at index 1 comes back with 3 health, which the game is not supposed to allow.",
      note: NOTE_LOGIC,
      factsTable: [
        ["health[i] >= 0", "9, 3, 7: the fallen hero is healed back to 3"],
        ["health[i] = amount;", "3, 0, 3: health is set to 3 instead of raised by 3"],
        ["health[0] + amount in place of health[i] + amount", "9, 0, 12: index 2 gets the new health[0], 9, plus 3"],
        ["int i = 1", "6, 0, 7: the hero at index 0 is never healed"],
      ],
      verify: {
        cases: [
          { run: `${W20_I}\n${W20_CALL}\nConsole.WriteLine(health[0] + " " + health[1] + " " + health[2]);\n${W20_II}`, out: "9 0 7" },
          { run: `${W20_HEAD}
void HealAll(List<int> health, int amount)
{
    for (int i = 0; i < health.Count; i++)
    {
        if (health[i] >= 0)
        {
            health[i] = health[i] + amount;
        }
    }
}`, out: "9 3 7" },
          { run: `${W20_HEAD}
void HealAll(List<int> health, int amount)
{
    for (int i = 0; i < health.Count; i++)
    {
        if (health[i] > 0)
        {
            health[i] = amount;
        }
    }
}`, out: "3 0 3" },
          { run: `${W20_HEAD}
void HealAll(List<int> health, int amount)
{
    for (int i = 0; i < health.Count; i++)
    {
        if (health[i] > 0)
        {
            health[i] = health[0] + amount;
        }
    }
}`, out: "9 0 12" },
          { run: `${W20_HEAD}
void HealAll(List<int> health, int amount)
{
    for (int i = 1; i < health.Count; i++)
    {
        if (health[i] > 0)
        {
            health[i] = health[i] + amount;
        }
    }
}`, out: "6 0 7" },
        ],
      },
    },
  ],
};

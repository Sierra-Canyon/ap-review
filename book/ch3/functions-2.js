export default {
  id: "functions-2",
  chapter: 3,
  number: "3.2",
  title: "Hand a function one value",
  from: "Functions 2 · Day 2",
  minutes: 25,
  skills: [],
  goals: [
    "Define a function with one parameter and call it with different arguments",
    "Point to the argument and the parameter in a call and its definition",
    "Say what `CS7036` means and fix it",
    "Say what a function would cost without its parameter",
  ],
  blocks: [
    {
      type: "text",
      md: "These two functions are the same except for one word.",
    },
    {
      type: "code",
      code: `PrintRookReady();
PrintMoteReady();

void PrintRookReady()
{
    Console.WriteLine("Rook is ready.");
}

void PrintMoteReady()
{
    Console.WriteLine("Mote is ready.");
}`,
      expect: { out: "Rook is ready.\nMote is ready." },
    },
    {
      type: "text",
      md: "Hero needs a third function, almost a copy of the other two. A **parameter** gives the part that changes a name of its own, so one function covers every hero.",
    },
    {
      type: "recipe",
      title: "A function with one parameter",
      template: "void {Name}({Type} {parameter})\n{\n    {Body}\n}",
      parts: [
        { slot: "{Type}", meaning: "the type of the value the function takes in: `string`, `int`, `double`, or `bool`" },
        { slot: "{parameter}", meaning: "the name of that value inside the function. Only this function can see it." },
        { slot: "{Body}", meaning: "uses the parameter like any variable. It already holds a value when the body starts." },
      ],
    },
    {
      type: "code",
      code: `PrintReady("Rook");
PrintReady("Mote");
PrintReady("Hero");

void PrintReady(string name)
{
    Console.WriteLine(name + " is ready.");
}`,
      expect: { out: "Rook is ready.\nMote is ready.\nHero is ready." },
    },
    {
      type: "text",
      md: "## Argument and parameter\n\nIn `PrintReady(\"Rook\")`, `\"Rook\"` is the **argument**: the value in the call. `name` is the **parameter**: the name in the definition. When the call happens, the argument is copied into the parameter, and then the body runs.\n\nA number works the same way. Step through this program and watch `hp` in the Variables pane.",
    },
    {
      type: "step",
      code: `int rookHp = 4;
PrintPotionAdvice(rookHp);
PrintPotionAdvice(9);

void PrintPotionAdvice(int hp)
{
    if (hp <= 3)
    {
        Console.WriteLine("Drink a potion now.");
    }
    else if (hp <= 6)
    {
        Console.WriteLine("Keep a potion handy.");
    }
    else
    {
        Console.WriteLine("Save your potions.");
    }
}`,
      notes: {
        "2": "The argument is rookHp, which holds 4. The 4 is copied into the parameter hp, and the body starts.",
        "7": "Tests hp: 4 on the first call, 9 on the second. Neither is 3 or less, so the computer tests the next condition.",
        "11": "On the first call 4 <= 6 is true, so this branch runs and the rest of the chain is skipped. On the second call 9 <= 6 is false, and the else runs.",
        "3": "The argument is 9, a number with no variable at all. hp is 9 on this call.",
      },
      expect: { out: "Keep a potion handy.\nSave your potions." },
    },
    {
      type: "text",
      md: "Out in the program the variable is called `rookHp`. Inside the function the parameter is called `hp`. The names do not have to match, because the value is copied, not the name. The argument `9` has no name at all.",
    },
    {
      type: "note",
      kind: "trap",
      md: "Quotation marks mean these exact letters. No quotation marks means the value in the variable. With `\"name\"` in quotes, every hero gets the same line: `name is ready.`",
    },
    {
      type: "code",
      code: `PrintReady("Rook");
PrintReady("Mote");

void PrintReady(string name)
{
    Console.WriteLine("name" + " is ready.");
}`,
      expect: { out: "name is ready.\nname is ready." },
    },
    {
      type: "text",
      md: "## A call with nothing in it\n\nThe function promises to take a name. This call does not bring one.",
    },
    {
      type: "code",
      code: `PrintReady();

void PrintReady(string name)
{
    Console.WriteLine(name + " is ready.");
}`,
      expect: { error: "CS7036" },
    },
    {
      type: "text",
      md: "It does not build: `CS7036: There is no argument given that corresponds to the required parameter 'name' of 'PrintReady(string)'`. The error names the parameter that was left empty. Put `\"Rook\"` in the parentheses.",
    },
    {
      type: "text",
      md: "## Without the parameter\n\nHere is `PrintPotionAdvice` with its parameter taken out. The value has to go somewhere, so it becomes a variable inside the body.",
    },
    {
      type: "code",
      code: `PrintPotionAdviceAt5();

void PrintPotionAdviceAt5()
{
    int hp = 5;
    if (hp <= 3)
    {
        Console.WriteLine("Drink a potion now.");
    }
    else if (hp <= 6)
    {
        Console.WriteLine("Keep a potion handy.");
    }
    else
    {
        Console.WriteLine("Save your potions.");
    }
}`,
      expect: { out: "Keep a potion handy." },
    },
    {
      type: "text",
      md: "It works, for 5. Health 2 needs another copy of the whole chain, and health 9 another. Change the rule to drink a potion at 2 or less, and the edit has to go into every copy. A copy someone forgets keeps the old rule, with no error anywhere. With the parameter, there is one function and one edit: `hp <= 2`. Section 3.6 practices this comparison.",
    },
    {
      type: "mcq",
      id: "functions-2-q1",
      question: "Here is a definition and a call.\n\n`void PrintGold(int coins)`\n\n`PrintGold(15);`\n\nWhich is the argument and which is the parameter?",
      choices: [
        "15 is the argument. coins is the parameter.",
        "coins is the argument. 15 is the parameter.",
        "Both are arguments: one in the call and one in the definition.",
        "PrintGold is the argument, because it is what gets called.",
      ],
      answer: 0,
      why: [
        "The argument is the value in the call. The parameter is the name in the definition, and the 15 is copied into it.",
        "This is the right pair the wrong way around. The argument is in the call, the parameter is in the definition.",
        "The definition holds the parameter. Only the call holds an argument.",
        "PrintGold is the function's name. The argument is the value inside the parentheses of the call.",
      ],
      verify: null,
    },
    {
      type: "mcq",
      id: "functions-2-q2",
      question: "What does the second call print?",
      code: `string hero = "Mote";
PrintReady(hero);
PrintReady("hero");

void PrintReady(string name)
{
    Console.WriteLine(name + " is ready.");
}`,
      choices: ["hero is ready.", "Mote is ready.", "name is ready.", "It does not build: there is no variable called hero in PrintReady."],
      answer: 0,
      why: [
        "The second argument is in quotation marks, so it is the letters h, e, r, o. That text is copied into name.",
        "The first call prints Mote is ready. The second argument is the text \"hero\", not the variable.",
        "name has no quotation marks in the body, so the body uses the value copied into it.",
        "PrintReady never uses the name hero. It uses its parameter, name, which holds a copy of the argument.",
      ],
      verify: { out: "Mote is ready.\nhero is ready." },
    },
    {
      type: "mcq",
      id: "functions-2-q3",
      question: "What happens?",
      code: `PrintLoot();

void PrintLoot(string item)
{
    Console.WriteLine("You find a " + item + ".");
}`,
      choices: [
        "It does not build: there is no argument given for the required parameter 'item' (CS7036).",
        "It prints You find a .",
        "It prints nothing, because no item was given.",
        "It builds, then crashes when the call runs.",
      ],
      answer: 0,
      why: [
        "PrintLoot takes one string, and the call gives it none. The compiler stops the build and names the parameter.",
        "C# does not fill in an empty string. A missing argument stops the build.",
        "A missing argument is caught before anything runs, so the program never starts.",
        "The compiler checks the call against the definition. This is caught at build time.",
      ],
      verify: { error: "CS7036" },
    },
    {
      type: "parsons",
      id: "functions-2-p1",
      prompt: "Put the lines in order so the program prints `Grub blocks the door.` and then `Bat blocks the door.`",
      lines: [
        `PrintBlocker("Grub");`,
        `PrintBlocker("Bat");`,
        `void PrintBlocker(string monster)`,
        `{`,
        `    Console.WriteLine(monster + " blocks the door.");`,
        `}`,
      ],
      distractors: [`    Console.WriteLine("monster" + " blocks the door.");`, `void PrintBlocker()`],
      expect: { out: "Grub blocks the door.\nBat blocks the door." },
    },
    {
      type: "exercise",
      id: "functions-2-e1",
      prompt: "Write `TorchLine`. It takes the number of turns a torch has left and returns one line about it:\n\n- 0 or less: `The torch is out.`\n- exactly 1: `The torch has 1 turn left.`\n- anything else: `The torch has 5 turns left.`, with the real number in place of 5.",
      starter: `string TorchLine(int turns)
{
    return "?";
}`,
      solution: `string TorchLine(int turns)
{
    if (turns <= 0)
    {
        return "The torch is out.";
    }
    else if (turns == 1)
    {
        return "The torch has 1 turn left.";
    }
    else
    {
        return "The torch has " + turns + " turns left.";
    }
}`,
      tests: [
        { call: `TorchLine(5)`, expect: "The torch has 5 turns left." },
        { call: `TorchLine(12)`, expect: "The torch has 12 turns left." },
        { call: `TorchLine(1)`, expect: "The torch has 1 turn left." },
        { call: `TorchLine(0)`, expect: "The torch is out." },
      ],
      hints: [
        "The number in the line comes from the parameter: `\"The torch has \" + turns + \" turns left.\"`.",
        "Test for 0 or less and for exactly 1 first. The `else` covers every other number.",
      ],
    },
    {
      type: "summary",
      items: [
        "A parameter is written in the definition with its type: `void PrintReady(string name)`.",
        "The argument is the value in the call. When the call runs, it is copied into the parameter.",
        "The argument and the parameter do not need the same name. `PrintPotionAdvice(rookHp)` fills `hp`.",
        "`\"name\"` in quotes is the letters n, a, m, e. `name` without quotes is the value in the parameter.",
        "A call with a missing argument does not build (`CS7036`).",
        "Without the parameter, every value needs its own copy of the function, and a rule change is an edit in every copy.",
      ],
    },
  ],
};

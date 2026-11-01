export const sets = {
  "q803-s9": { name: "Museum visitors", label: "Free response", intro: String.raw`Visitors enter a museum at a rate of $W(t)$ people per hour, where $t$ is measured in hours and $0 \le t \le 12$. The function $W$ is continuous. Selected values of $W(t)$ are given in the table below. At time $t = 0$, there are $100$ people in the museum.`,
    sources: [{ title: "", blocks: [{ table: { head: ["$t$ (hours)", "$0$", "$2$", "$5$", "$9$", "$12$"], rows: [["$W(t)$ (people per hour)", "$20$", "$26$", "$30$", "$24$", "$18$"]] } }] }] },
};

const items = [
  { id: "q803-m01", type: "mcq", skill: "u8", topic: "8.3", calc: false,
    question: String.raw`Water flows into a wading pool at a rate of $r(t) = 6 + 2t$ gallons per minute, where $t$ is in minutes. At time $t = 0$ the pool contains $40$ gallons. How many gallons are in the pool at time $t = 3$?`,
    choices: ["$67$", "$27$", "$52$", "$76$"],
    why: [
      String.raw`The amount is $40 + \displaystyle\int_0^3 (6 + 2t)\,dt = 40 + \left[6t + t^2\right]_0^3 = 40 + 27 = 67$ gallons.`,
      String.raw`$27$ gallons is the water that flows in during the $3$ minutes. The $40$ gallons already in the pool must be added.`,
      String.raw`This adds the rate $r(3) = 12$ gallons per minute to $40$ gallons. The water added is the integral of the rate.`,
      String.raw`This multiplies the rate at the end, $r(3) = 12$, by $3$ minutes, as if the rate were $12$ the whole time. The rate increases from $6$, so the integral is needed.`,
    ], answer: 0 },
  { id: "q803-m02", type: "mcq", skill: "u8", topic: "8.3", calc: false,
    question: String.raw`People enter an amusement park at a rate of $E(t)$ people per hour, where $t$ is the number of hours after the park opens. Which statement is the best interpretation of $\displaystyle\int_2^5 E(t)\,dt = 340$?`,
    choices: [
      String.raw`$340$ people entered the park from $2$ hours to $5$ hours after it opened.`,
      String.raw`There were $340$ people in the park $5$ hours after it opened.`,
      String.raw`The rate at which people entered the park increased by $340$ people per hour from $t = 2$ to $t = 5$.`,
      String.raw`People entered the park at an average rate of $340$ people per hour from $t = 2$ to $t = 5$.`,
    ],
    why: [
      String.raw`The integral of a rate over an interval is the total change over that interval: the number of people who entered from $t = 2$ to $t = 5$.`,
      String.raw`The integral counts only the people who entered between $t = 2$ and $t = 5$. It says nothing about people who entered earlier or left.`,
      String.raw`The change in the rate is $E(5) - E(2)$, the integral of $E'$. The integral of $E$ counts people.`,
      String.raw`The average rate is $\dfrac{340}{5 - 2} \approx 113$ people per hour. The integral itself is a number of people, not a rate.`,
    ], answer: 0 },
  { id: "q803-m03", type: "mcq", skill: "u8", topic: "8.3", calc: false,
    question: String.raw`Oil drains from a tank at a rate of $R(t)$ liters per hour, where $t$ is measured in hours. What are the units of $\displaystyle\int_0^4 R'(t)\,dt$?`,
    choices: ["liters per hour", "liters", "liters per hour per hour", "hours"],
    why: [
      String.raw`$\displaystyle\int_0^4 R'(t)\,dt = R(4) - R(0)$, a change in the rate $R$, so its units are those of $R$: liters per hour.`,
      String.raw`Liters are the units of $\displaystyle\int_0^4 R(t)\,dt$. Integrating $R'$ gives back a change in $R$.`,
      String.raw`Liters per hour per hour are the units of $R'(t)$. Integrating with respect to $t$ multiplies by hours.`,
      String.raw`Hours are the units of $t$ only. The integral has the units of $R'(t)$ times hours.`,
    ], answer: 0 },
  { id: "q803-m04", type: "mcq", skill: "u8", topic: "8.3", calc: false,
    question: String.raw`Gravel is loaded into a storage bin at a rate of $A(t) = 4t$ tons per hour and unloaded at a constant rate of $6$ tons per hour, for $0 \le t \le 5$. At time $t = 0$ the bin holds $30$ tons. How many tons of gravel are in the bin at time $t = 5$?`,
    choices: ["$50$", "$20$", "$110$", "$80$"],
    why: [
      String.raw`The amount is $30 + \displaystyle\int_0^5 (4t - 6)\,dt = 30 + \left[2t^2 - 6t\right]_0^5 = 30 + (50 - 30) = 50$ tons.`,
      String.raw`$20$ tons is the net change. The $30$ tons in the bin at $t = 0$ must be added.`,
      String.raw`This adds the $30$ tons unloaded in place of subtracting them: $30 + 50 + 30$.`,
      String.raw`This leaves out the gravel unloaded: $30 + \displaystyle\int_0^5 4t\,dt = 80$. The $6 \cdot 5 = 30$ tons unloaded must be subtracted.`,
    ], answer: 0 },
  { id: "q803-m05", type: "mcq", skill: "u8", topic: "8.3", calc: true,
    question: String.raw`Rainwater collects in a barrel at a rate of $R(t) = 1 + 0.5t\sin\left(\dfrac{t}{2}\right)$ gallons per hour, where $t$ is in hours. How many gallons collect in the barrel from $t = 0$ to $t = 6$?`,
    choices: ["$12.222$", "$8.540$", "$7.270$", "$1.423$"],
    why: [
      String.raw`With a calculator, $\displaystyle\int_0^6 \left(1 + 0.5t\sin\left(\dfrac{t}{2}\right)\right)dt = 12.222$ gallons.`,
      String.raw`This multiplies the rate at the end, $R(6) = 1.423$, by $6$ hours, as if the rate were constant. The rate changes, so the integral is needed.`,
      String.raw`This multiplies the average of $R(0)$ and $R(6)$ by $6$, a one-trapezoid estimate. The exact amount is the integral.`,
      String.raw`$1.423$ gallons per hour is $R(6)$, the rate at $t = 6$, not the amount collected.`,
    ], answer: 0 },
  { id: "q803-m06", type: "mcq", skill: "u8", topic: "8.3", calc: true,
    question: String.raw`Water enters a pond at a rate of $E(t) = 5 + 3\sin\left(\dfrac{t}{2}\right)$ thousand gallons per day and leaves at a constant rate of $6.5$ thousand gallons per day, for $0 \le t \le 8$ days. At what time $t$ is the amount of water in the pond greatest?`,
    choices: ["$5.236$", "$1.047$", "$3.142$", "$8$"],
    why: [
      String.raw`The amount changes at the rate $E(t) - 6.5$, which is $0$ at $t = 1.047$ and $t = 5.236$, negative before $1.047$, positive between, and negative after $5.236$. Candidates: the amount at $t = 5.236$ exceeds the amount at $t = 0$ by $\displaystyle\int_0^{5.236} (E(t) - 6.5)\,dt = 3.342 > 0$, and the amount decreases after $5.236$. So the greatest amount is at $t = 5.236$.`,
      String.raw`At $t = 1.047$ the net rate changes from negative to positive, so the amount has a minimum there.`,
      String.raw`$t = \pi \approx 3.142$ is where the inflow rate $E(t)$ is greatest. The amount keeps increasing as long as $E(t) > 6.5$.`,
      String.raw`The net rate is negative on $(5.236, 8]$, so the amount at $t = 8$ is less than at $t = 5.236$.`,
    ], answer: 0 },
  { id: "q803-f1a", type: "frq", skill: "u8", topic: "8.3", calc: false, set: "q803-s9", part: "(a)",
    prompt: String.raw`Use a trapezoidal sum with the four subintervals indicated by the table to approximate $\displaystyle\int_0^{12} W(t)\,dt$. Using correct units, explain the meaning of $\displaystyle\int_0^{12} W(t)\,dt$ in the context of the problem.`,
    rows: [
      { name: "Trapezoidal sum", earns: String.raw`$2 \cdot \dfrac{20 + 26}{2} + 3 \cdot \dfrac{26 + 30}{2} + 4 \cdot \dfrac{30 + 24}{2} + 3 \cdot \dfrac{24 + 18}{2} = 301$.` },
      { name: "Meaning", earns: String.raw`$\displaystyle\int_0^{12} W(t)\,dt$ is the total number of people who enter the museum from $t = 0$ to $t = 12$ hours.` },
    ],
    solution: String.raw`$\displaystyle\int_0^{12} W(t)\,dt \approx 2 \cdot \dfrac{20 + 26}{2} + 3 \cdot \dfrac{26 + 30}{2} + 4 \cdot \dfrac{30 + 24}{2} + 3 \cdot \dfrac{24 + 18}{2} = 46 + 84 + 108 + 63 = 301$. The integral is the total number of people who enter the museum during the $12$ hours from $t = 0$ to $t = 12$.` },
  { id: "q803-f1b", type: "frq", skill: "u8", topic: "8.3", calc: false, set: "q803-s9", part: "(b)",
    prompt: String.raw`Visitors leave the museum at a constant rate of $20$ people per hour for $0 \le t \le 12$. Use your answer from part (a) to estimate the number of people in the museum at time $t = 12$.`,
    rows: [
      { name: "Setup", earns: String.raw`$100 + \displaystyle\int_0^{12} W(t)\,dt - \int_0^{12} 20\,dt$.` },
      { name: "Answer", earns: String.raw`$100 + 301 - 240 = 161$ people.` },
    ],
    solution: String.raw`The number of people at $t = 12$ is $100 + \displaystyle\int_0^{12} W(t)\,dt - \int_0^{12} 20\,dt \approx 100 + 301 - 240 = 161$ people.` },
];

export default { forms: [{ id: "q803", name: "Topic 8.3 Quiz: Accumulation in Context", group: "Unit 8: Applications of Integration", items }] };

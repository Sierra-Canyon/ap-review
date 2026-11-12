// Topic 4.9 Quiz: Ideology and Economic Policy
// Sources: the Federal Open Market Committee statement of December 16, 2008, Gallup's trend on government regulation of business (2002 to 2026), and a scenario.
import { lines } from "../../plot.js";

// Gallup, September polls: amount of government regulation of business and industry
const reg = {
  years: ["2002", "2005", "2008", "2011", "2014", "2017", "2020", "2023", "2026"],
  much: [35, 34, 38, 50, 49, 45, 36, 44, 36],
  little: [31, 23, 27, 24, 22, 23, 27, 25, 36],
  right: [31, 40, 31, 23, 27, 29, 36, 31, 25],
};

export const sets = {
  "t49-s1": {
    id: "t49-s1", name: "The Federal Reserve cuts rates, December 2008", intro: "Use the passage below to answer the questions that follow.",
    sources: [
      { title: "Source", blocks: [
        { p: "The Federal Open Market Committee decided today to establish a target range for the federal funds rate of 0 to 1/4 percent." },
        { p: "Since the Committee's last meeting, labor market conditions have deteriorated, and the available data indicate that consumer spending, business investment, and industrial production have declined. Financial markets remain quite strained and credit conditions tight. Overall, the outlook for economic activity has weakened further." },
        { p: "Meanwhile, inflationary pressures have diminished appreciably. In light of the declines in the prices of energy and other commodities and the weaker prospects for economic activity, the Committee expects inflation to moderate further in coming quarters." },
        { p: "The Federal Reserve will employ all available tools to promote the resumption of sustainable economic growth and to preserve price stability." },
        { cite: "Board of Governors of the Federal Reserve System, \"FOMC statement,\" press release, December 16, 2008.", url: "https://www.federalreserve.gov/newsevents/pressreleases/monetary20081216b.htm", kind: "primary" },
      ] },
    ],
  },
  "t49-s2": {
    id: "t49-s2", name: "Views of government regulation of business, 2002 to 2026", intro: "Use the graph and table below to answer the questions that follow.", label: "Chart",
    sources: [
      { title: "Chart", blocks: [
        { svg: lines({ labels: reg.years, series: [{ name: "Too much", values: reg.much, dy: -4 }, { name: "Too little", values: reg.little, dy: 10 }, { name: "Right amount", values: reg.right }], y: [0, 60], step: 10, yname: "Percent", right: 110, width: 600,
          alt: "Line graph of Gallup September polls on government regulation of business and industry. Too much: 2002, 35; 2005, 34; 2008, 38; 2011, 50; 2014, 49; 2017, 45; 2020, 36; 2023, 44; 2026, 36. Too little: 2002, 31; 2005, 23; 2008, 27; 2011, 24; 2014, 22; 2017, 23; 2020, 27; 2023, 25; 2026, 36. About the right amount: 2002, 31; 2005, 40; 2008, 31; 2011, 23; 2014, 27; 2017, 29; 2020, 36; 2023, 31; 2026, 25." }),
          caption: "Percent of U.S. adults saying there is too much, too little, or about the right amount of government regulation of business and industry, Gallup September polls, every three years from 2002 to 2026" },
        { table: { head: ["Year", "Too much (%)", "Too little (%)", "Right amount (%)"], rows: reg.years.map((y, i) => [y, String(reg.much[i]), String(reg.little[i]), String(reg.right[i])]) } },
        { cite: "Gallup, \"Government,\" Gallup Historical Trends, government regulation of business table, September polls, accessed November 2026.", url: "https://news.gallup.com/poll/27286/government.aspx", kind: "data" },
      ] },
    ],
  },
  "t49-s3": {
    id: "t49-s3", name: "A recession and two plans", intro: "Use the scenario below to answer parts A, B, and C.",
    sources: [
      { title: "Scenario", blocks: [
        { p: "The economy has been shrinking for two quarters, and the unemployment rate has risen sharply. Inflation is low. In Congress, Senator Alvarez proposes a bill to spend several hundred billion dollars repairing highways, bridges, and schools over two years, paid for by borrowing. Senator Brooks proposes instead to cut tax rates on businesses and on income from investments, and to delay several new environmental rules on factories. Both senators expect the Federal Reserve to act on its own at its next meeting." },
        { cite: "Scenario written for this review.", kind: "scenario" },
      ] },
    ],
  },
};

const S = "u4", T = "4.9";

export default {
  forms: [
    { id: "t49", name: "Topic 4.9 Quiz: Ideology and Economic Policy", group: "Unit 4: American Political Ideologies and Beliefs",
      items: [
        { id: "t49-m01", skill: S, type: "mcq", set: "t49-s1", topic: T, difficulty: "moderate",
          question: "The Committee's action in the passage is an example of which kind of policy?",
          choices: ["Expansionary monetary policy", "Contractionary monetary policy", "Expansionary fiscal policy", "Supply-side fiscal policy"],
          why: [
            "Correct. The Federal Reserve lowered its target for the federal funds rate to near zero, which makes borrowing cheaper and is meant to raise spending and hiring. Changing interest rates is monetary policy.",
            "Contractionary monetary policy raises interest rates to slow the economy and fight inflation, the opposite of this cut.",
            "Fiscal policy is taxing and spending by Congress and the president, not interest rate decisions by the Federal Reserve.",
            "Supply-side policy uses tax cuts and deregulation passed by Congress, not interest rates set by the Federal Reserve.",
          ],
          answer: 0 },
        { id: "t49-m02", skill: S, type: "mcq", set: "t49-s1", topic: T, difficulty: "moderate",
          question: "According to the passage, which part of the Federal Reserve's mandate was the Committee most focused on?",
          choices: [
            "Maximum employment, because the labor market was getting worse",
            "Stable prices, because inflation was rising faster than expected",
            "Balanced budgets, because federal deficits were growing quickly",
            "Free trade, because imports and exports had fallen during the year",
          ],
          why: [
            "Correct. The statement says labor market conditions \"have deteriorated\" while inflation pressures \"have diminished,\" so the rate cut aimed at the employment half of the Fed's dual mandate.",
            "The passage says inflation pressures had diminished and inflation was expected to moderate further.",
            "Federal budgets are set by Congress and the president; balancing them is not part of the Fed's mandate.",
            "Trade policy is set by Congress and the president, and the statement does not mention trade.",
          ],
          answer: 0 },
        { id: "t49-m03", skill: S, type: "mcq", set: "t49-s2", topic: T, difficulty: "moderate",
          question: "Which statement is accurate according to the data?",
          choices: [
            "In 2026, the same share said there was too much as said too little regulation.",
            "A majority said there was too much regulation in at least one year shown.",
            "The share saying \"too little\" fell in every period shown after 2002.",
            "The share saying \"the right amount\" was highest in the 2011 poll.",
          ],
          why: [
            "Correct. In 2026, 36 percent said too much and 36 percent said too little.",
            "The highest \"too much\" figure is 50 percent in 2011, which is half, not a majority.",
            "The \"too little\" share rose in several periods, such as from 22 percent in 2014 to 36 percent in 2026.",
            "The \"right amount\" share was lowest in 2011, at 23 percent; it was highest in 2005, at 40 percent.",
          ],
          answer: 0 },
        { id: "t49-m04", skill: S, type: "mcq", set: "t49-s2", topic: T, difficulty: "difficult",
          question: "Which group would most likely use the 2011 result to support its agenda, and what would it propose?",
          choices: [
            "Conservatives, proposing fewer rules on businesses to spur hiring",
            "Liberals, proposing new federal limits on how banks may lend money",
            "Libertarians, proposing new federal agencies to oversee markets",
            "Liberals, proposing the repeal of federal environmental rules",
          ],
          why: [
            "Correct. In 2011, half of adults said there was too much regulation, the high point shown, and conservatives argue that cutting regulation encourages investment and jobs.",
            "Liberals favor more bank regulation, but a result showing that half say there is too much regulation does not support their agenda.",
            "Libertarians oppose new regulatory agencies; they want less government in the market.",
            "Liberals generally defend environmental rules rather than proposing to repeal them.",
          ],
          answer: 0 },
        { id: "t49-m05", skill: S, type: "mcq", topic: T, difficulty: "easy",
          question: "Which action is an example of fiscal policy?",
          choices: [
            "Congress passing a tax cut to boost consumer spending",
            "The Federal Reserve lowering its target interest rate",
            "The Federal Reserve buying government bonds from banks",
            "A private bank raising the interest rate on its loans",
          ],
          why: [
            "Correct. Fiscal policy is the use of taxing and spending by Congress and the president to influence the economy.",
            "Setting interest rate targets is monetary policy carried out by the Federal Reserve.",
            "Buying bonds adds money to the banking system, a monetary policy tool of the Federal Reserve.",
            "A private bank's pricing is a business decision, not government policy.",
          ],
          answer: 0 },
        { id: "t49-m06", skill: S, type: "mcq", topic: T, difficulty: "moderate",
          question: "Which policy would supply-side economists most likely recommend during an economic slowdown?",
          choices: [
            "Cutting tax rates on businesses and investment to encourage production",
            "Raising federal spending on public works to increase demand for goods",
            "Raising the top income tax rate to pay for longer unemployment benefits",
            "Raising interest rates to slow the growth of the nation's money supply",
          ],
          why: [
            "Correct. Supply-side economics holds that lower taxes and fewer rules on producers lead them to invest, produce, and hire more, which grows the economy.",
            "Spending to raise demand is the Keynesian approach.",
            "Higher taxes on top earners to fund benefits fits a liberal, demand-side approach, not supply-side theory.",
            "Raising interest rates is a contractionary monetary step taken by the Federal Reserve, not a supply-side policy for a slowdown.",
          ],
          answer: 0 },
        { id: "t49-m07", skill: S, type: "mcq", topic: T, difficulty: "moderate",
          question: "Members of the Federal Reserve Board of Governors serve 14-year terms. What is the main purpose of such long terms?",
          choices: [
            "To shield monetary policy from short-term political pressure",
            "To let each president name the entire board during one term",
            "To give Congress direct control over the nation's interest rates",
            "To make each of the board's decisions subject to voter approval",
          ],
          why: [
            "Correct. Long, staggered terms mean governors outlast the officials who appoint them, so they can make unpopular choices, such as raising rates, without fear of losing their jobs at the next election.",
            "Staggered 14-year terms prevent one president from naming the whole board quickly.",
            "Congress created the Fed and oversees it, but it does not set interest rates directly.",
            "Fed decisions are not put to voters; the long terms keep them apart from elections.",
          ],
          answer: 0 },
        { id: "t49-m08", skill: S, type: "mcq", topic: T, difficulty: "easy",
          question: "During a recession, a government sharply cuts spending and raises taxes in order to shrink its budget deficit. Which approach is this?",
          choices: ["Austerity", "Keynesian stimulus", "Supply-side tax cutting", "Expansionary monetary policy"],
          why: [
            "Correct. Austerity means cutting spending and raising taxes to reduce deficits, even when the economy is weak.",
            "Keynesian stimulus does the opposite in a recession: more spending or lower taxes to raise demand.",
            "Supply-side policy cuts taxes; it does not raise them.",
            "Expansionary monetary policy is the Federal Reserve lowering interest rates, not changes to taxes and spending.",
          ],
          answer: 0 },
        { id: "t49-ca1a", skill: S, type: "fr", set: "t49-s3", part: "Concept application", sub: "A", topic: T,
          lead: "Use the scenario to answer parts A, B, and C.",
          prompt: "Describe the economic theory behind Senator Alvarez's proposal.",
          earns: "Describes Keynesian economics: in a recession, government should raise spending (even by borrowing) to increase demand, which creates jobs; ties it to the infrastructure bill.",
          yes: [
            "Keynesian economics: when demand falls in a recession, government should spend more, even by borrowing, so that new projects put people back to work. Alvarez's road and school repairs do this.",
            "Alvarez wants deficit spending on public works to replace the private spending lost in the recession, which is the Keynesian approach to raising demand.",
          ],
          no: [
            "\"Fiscal policy.\" (names the tool without describing the theory)",
            "\"Supply-side economics.\" (wrong theory; that is Brooks's plan)",
          ],
          example: "Alvarez's proposal reflects Keynesian economics, which holds that a recession is caused by too little demand and that government should fill the gap. By borrowing to pay workers and firms to repair highways, bridges, and schools, the government would put money in people's pockets, and their spending would create more jobs.",
          notExample: "Senator Alvarez wants to fix roads and schools." },
        { id: "t49-ca1b", skill: S, type: "fr", set: "t49-s3", part: "Concept application", sub: "B", topic: T,
          lead: "Use the scenario to answer parts A, B, and C.",
          prompt: "Explain why Senator Brooks's proposal reflects conservative ideology.",
          earns: "Explains that cutting taxes and delaying regulations reflects the conservative (supply-side, free-market) belief that limited government and lower costs for businesses lead to investment and growth.",
          yes: [
            "Conservatives believe the private market, not government spending, drives growth. Lower taxes on businesses and investors and fewer rules would leave firms more money to invest and hire.",
            "Brooks's plan shrinks government's role by cutting taxes and delaying regulation, which conservatives argue lowers the cost of producing goods and so encourages jobs.",
          ],
          no: [
            "\"He wants tax cuts.\" (restates the plan without explaining the ideology)",
            "\"Conservatives want to protect the environment less.\" (no economic reasoning)",
          ],
          example: "Conservatives favor free markets and limited government, and many follow supply-side economics. Brooks's plan cuts tax rates on businesses and investment income and delays rules on factories, which conservatives argue lowers the cost of doing business, leading firms to invest, expand, and hire without a large increase in government spending.",
          notExample: "Senator Brooks disagrees with Senator Alvarez." },
        { id: "t49-ca1c", skill: S, type: "fr", set: "t49-s3", part: "Concept application", sub: "C", topic: T,
          lead: "Use the scenario to answer parts A, B, and C.",
          prompt: "Explain how the Federal Reserve could respond to the recession at its next meeting.",
          earns: "Explains a monetary policy action (lowering the federal funds rate target, buying securities to expand the money supply) and how it would encourage borrowing, spending, and hiring.",
          yes: [
            "The Fed could lower its target for the federal funds rate, making loans cheaper so that businesses and families borrow and spend more, which supports hiring.",
            "The Fed could buy government bonds to add money to the banking system, lowering interest rates and encouraging lending.",
          ],
          no: [
            "\"The Fed could cut taxes.\" (taxes are fiscal policy set by Congress)",
            "\"The Fed could raise interest rates.\" (the wrong direction for a recession with low inflation)",
          ],
          example: "With unemployment rising and inflation low, the Federal Reserve could lower its target for the federal funds rate. Cheaper borrowing would encourage businesses to invest and families to buy homes and cars, raising demand and helping employers keep or add workers, which serves the Fed's goal of maximum employment.",
          notExample: "The Federal Reserve is in charge of the economy." },
      ] },
  ],
};

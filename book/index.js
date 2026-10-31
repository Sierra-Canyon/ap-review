// The book's table of contents. Sections appear in this order.
import variables1 from "./ch1/variables-1.js";
import variables2 from "./ch1/variables-2.js";
import variables3 from "./ch1/variables-3.js";
import if1 from "./ch2/if-1.js";
import if2 from "./ch2/if-2.js";
import if3 from "./ch2/if-3.js";
import functions1 from "./ch3/functions-1.js";
import functions2 from "./ch3/functions-2.js";
import functions3 from "./ch3/functions-3.js";
import functions4 from "./ch3/functions-4.js";
import functions5 from "./ch3/functions-5.js";
import functions6 from "./ch3/functions-6.js";
import lists1 from "./ch4/lists-1.js";
import lists2 from "./ch4/lists-2.js";
import lists3 from "./ch4/lists-3.js";
import for1 from "./ch5/for-1.js";
import for2 from "./ch5/for-2.js";
import for3 from "./ch5/for-3.js";
import for4 from "./ch5/for-4.js";
import for5 from "./ch5/for-5.js";
import for6 from "./ch5/for-6.js";

export const chapters = [
  { n: 1, title: "Variables", from: "Review 1" },
  { n: 2, title: "If statements", from: "Review 2" },
  { n: 3, title: "Functions", from: "Functions 1 to 6" },
  { n: 4, title: "Lists", from: "Lists 1 to 3" },
  { n: 5, title: "For loops", from: "For 1 to 6" },
];

export const sections = [variables1, variables2, variables3, if1, if2, if3, functions1, functions2, functions3, functions4, functions5, functions6, lists1, lists2, lists3, for1, for2, for3, for4, for5, for6];

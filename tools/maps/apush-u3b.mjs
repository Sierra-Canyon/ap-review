// AP U.S. History Unit 3 (3.8 to 3.13) maps (review bank, decks/apush/u3b.js). Spec format: tools/build-maps.mjs. HANDOFF.md, section 2e.

const election1800 = {
  id: "u3b-election1800",
  caption: "Electoral votes for president by state, 1800 (present-day state lines shown; in 1800 Maine was part of Massachusetts and West Virginia part of Virginia, and the areas left blank were federal territories or outside the United States)",
  alt: "Map of the eastern United States in 1800 with present-day state lines, shaded by how each state's electors voted for president. States whose electors all voted for Thomas Jefferson, the Democratic-Republican: New York, 12 votes; Virginia, 21; Kentucky, 4; Tennessee, 3; South Carolina, 8; and Georgia, 4. States whose electors all voted for John Adams, the Federalist: New Hampshire, 6; Vermont, 4; Massachusetts, including Maine, 16; Rhode Island, 4; Connecticut, 9; New Jersey, 7; and Delaware, 3. States whose electors split: Pennsylvania, 8 for Jefferson and 7 for Adams; Maryland, 5 and 5; and North Carolina, 8 for Jefferson and 4 for Adams. Totals: Jefferson 73, Adams 65.",
  bbox: [-91, 29.5, -66.5, 47.6], width: 700, height: 470, states: true,
  fill: [
    { kind: "a", states: ["New York", "Virginia", "West Virginia", "Kentucky", "Tennessee", "South Carolina", "Georgia"] },
    { kind: "b", states: ["New Hampshire", "Vermont", "Massachusetts", "Maine", "Rhode Island", "Connecticut", "New Jersey", "Delaware"] },
    { kind: "c", states: ["Pennsylvania", "Maryland", "North Carolina"] },
  ],
  regions: [
    { name: "Atlantic Ocean", at: [-71.5, 35.5], size: 12 },
    { name: "NY 12", at: [-75.3, 42.9], size: 11 },
    { name: "VA 21", at: [-78.9, 37.6], size: 11 },
    { name: "KY 4", at: [-85.2, 37.5], size: 11 },
    { name: "TN 3", at: [-86.4, 35.8], size: 11 },
    { name: "SC 8", at: [-80.9, 33.9], size: 11 },
    { name: "GA 4", at: [-83.4, 32.6], size: 11 },
    { name: "PA 8 to 7", at: [-77.6, 40.9], size: 11 },
    { name: "NC 8 to 4", at: [-79.2, 35.6], size: 11 },
    { name: "MD 5 to 5", at: [-75.2, 38.15], size: 10 },
    { name: "MA 16", at: [-69.6, 45.2], size: 11 },
    { name: "VT 4", at: [-72.7, 44.1], size: 10 },
    { name: "NH 6", at: [-70.0, 43.35], size: 10 },
    { name: "CT 9", at: [-72.7, 41.25], size: 10 },
    { name: "RI 4", at: [-70.2, 41.3], size: 10 },
    { name: "NJ 7", at: [-73.6, 39.6], size: 10 },
    { name: "DE 3", at: [-74.4, 38.65], size: 10 },
  ],
  legend: [
    { kind: "a", text: "All electors for Jefferson" },
    { kind: "b", text: "All electors for Adams" },
    { kind: "c", text: "Electors split (Jefferson to Adams)" },
  ],
  legendAt: "bottom-left", legendWidth: 250,
  checked: ["National Archives, Electoral College results, 1800 election", "Wikipedia, \"1800 United States presidential election\" (results by state)"],
};

const northwest = {
  id: "u3b-northwest",
  caption: "The war for the Ohio country, 1790 to 1795, and the Treaty of Greenville line (present-day state lines shown; the land north of the Ohio River was then the federal Northwest Territory)",
  alt: "Map of present-day Ohio, Indiana, Michigan, and Kentucky with present-day state lines (lakes are not drawn). Fort Washington, at present-day Cincinnati on the Ohio River, is marked as the main U.S. base. X marks show three battles: Harmar's defeat near Kekionga, at present-day Fort Wayne, Indiana, in October 1790; St. Clair's defeat at the site of later Fort Recovery, Ohio, on November 4, 1791; and Fallen Timbers on the Maumee River near present-day Toledo, August 20, 1794. Fort Greenville, where the treaty was signed on August 3, 1795, is marked, and so is Detroit, a British post until 1796. A dashed line shows the Greenville treaty line, which runs from the mouth of the Cuyahoga River on Lake Erie south to the Tuscarawas River, west to Loramie's store and Fort Recovery, and southwest to the Ohio River opposite the mouth of the Kentucky River. Land to the south and east of the line was given up to the United States.",
  bbox: [-87.6, 37.6, -80.0, 43.0], width: 640, height: 470, states: true,
  regions: [
    { name: "Ohio River", at: [-83.2, 38.35], size: 11 },
    { name: "Land given up to the U.S., 1795", at: [-82.3, 39.75], size: 11 },
    { name: "Lands left to Native nations", at: [-86.2, 40.75], size: 11 },
    { name: "KENTUCKY", at: [-84.2, 37.9], size: 10 },
  ],
  routes: [
    { kind: "route2", through: [[-81.7, 41.5], [-81.62, 41.25], [-81.52, 41.05], [-81.45, 40.65], [-82.4, 40.5], [-84.37, 40.35], [-84.78, 40.41], [-85.18, 38.68]] },
  ],
  places: [
    { name: "Fort Washington (Cincinnati)", at: [-84.51, 39.1], kind: "major", label: "right" },
    { name: "Harmar's defeat, Oct. 1790", at: [-85.14, 41.08], kind: "battle", label: "left" },
    { name: "St. Clair's defeat, Nov. 1791", at: [-84.78, 40.41], kind: "battle", label: "left" },
    { name: "Fallen Timbers, Aug. 1794", at: [-83.68, 41.57], kind: "battle", label: "left" },
    { name: "Fort Greenville, treaty Aug. 1795", at: [-84.63, 40.1], label: "right" },
    { name: "Detroit (British until 1796)", at: [-83.05, 42.33], label: "left" },
    { name: "Mouth of the Cuyahoga", at: [-81.7, 41.5], label: [6, 14] },
  ],
  legend: [
    { kind: "battle", text: "Battle" },
    { kind: "route2", text: "Greenville treaty line, 1795" },
    { kind: "major", text: "Main U.S. Army base" },
  ],
  legendAt: "top-right", legendWidth: 220,
  checked: ["the Treaty of Greenville, Article III (Avalon Project, Yale Law School) for the treaty line", "Wikipedia, \"Northwest Indian War\" and \"Treaty of Greenville,\" and the National Park Service, Fallen Timbers Battlefield, for the battle and fort sites"],
};

export const maps = [election1800, northwest];

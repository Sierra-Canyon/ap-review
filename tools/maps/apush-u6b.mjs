// Map specs for AP U.S. History Unit 6 review, 6.8 to 6.14 (drawn by tools/build-maps.mjs apush).
// Coordinates are [longitude, latitude]. Present-day state lines are shaded; captions say where they differ from the 1890s.

const CHECKED = [
  "National Archives, \"Electoral College Results\" for the election year (archives.gov/electoral-college)",
  "The American Presidency Project, UC Santa Barbara, \"Election of\" the same year, state-by-state results (presidency.ucsb.edu/statistics/elections)",
];

const e1896 = {
  id: "u6b-election-1896",
  caption: "The presidential election of 1896 by state (present-day state lines shown; Oklahoma, Indian Territory, Arizona, and New Mexico were territories and cast no electoral votes, so they are unshaded)",
  alt: "Map of the contiguous United States with present-day state lines. States shaded solid gave most of their electoral votes to William McKinley, the Republican: the Northeast, the Middle Atlantic states, the Midwest from Ohio and Michigan west to Iowa, Minnesota, and North Dakota, plus Maryland, Delaware, West Virginia, Kentucky, California, and Oregon. States hatched gave their electoral votes to William Jennings Bryan, the Democratic and Populist nominee: the whole South from Virginia to Texas, Missouri, Kansas, Nebraska, South Dakota, and the Mountain West and Washington. Oklahoma, Arizona, and New Mexico are unshaded. Dots mark Canton, Ohio, and Lincoln, Nebraska.",
  bbox: [-124.8, 24.5, -66.9, 49.4], width: 680, height: 430,
  states: true,
  fill: [
    { kind: "a", states: ["Maine", "New Hampshire", "Vermont", "Massachusetts", "Rhode Island", "Connecticut", "New York", "New Jersey", "Pennsylvania", "Delaware", "Maryland", "West Virginia", "Ohio", "Michigan", "Indiana", "Illinois", "Wisconsin", "Minnesota", "Iowa", "North Dakota", "Kentucky", "California", "Oregon"] },
    { kind: "b", states: ["Virginia", "North Carolina", "South Carolina", "Georgia", "Florida", "Alabama", "Mississippi", "Louisiana", "Texas", "Arkansas", "Tennessee", "Missouri", "Kansas", "Nebraska", "South Dakota", "Montana", "Wyoming", "Colorado", "Utah", "Idaho", "Nevada", "Washington"] },
  ],
  places: [
    { name: "Canton, Ohio", at: [-81.38, 40.8], label: "below" },
    { name: "Lincoln, Nebraska", at: [-96.7, 40.81], label: "below" },
  ],
  legend: [
    { kind: "a", text: "McKinley (Republican), 271 electoral votes" },
    { kind: "b", text: "Bryan (Democrat and Populist), 176" },
  ],
  legendAt: "bottom-left", legendWidth: 270,
  checked: CHECKED,
};

const e1892 = {
  id: "u6b-election-1892",
  caption: "The presidential election of 1892 by state (present-day state lines shown; Utah, Oklahoma, Indian Territory, Arizona, and New Mexico cast no electoral votes and are unshaded; each state is shaded for the candidate who won most of its electoral votes)",
  alt: "Map of the contiguous United States with present-day state lines. States shaded solid gave most of their electoral votes to Grover Cleveland, the Democrat: the whole South from Virginia and Kentucky to Texas, plus Missouri, Illinois, Indiana, Wisconsin, New York, New Jersey, Connecticut, Delaware, Maryland, West Virginia, and California. States hatched went to Benjamin Harrison, the Republican: most of New England, Pennsylvania, Ohio, Michigan, Iowa, Minnesota, Nebraska, South Dakota, Montana, Wyoming, Washington, and Oregon. States in gray went to James B. Weaver of the People's (Populist) Party: Kansas, Colorado, Idaho, and Nevada. North Dakota, which split its three electoral votes among all three candidates, is dotted. Utah, Oklahoma, Arizona, and New Mexico are unshaded. A dot marks Omaha, Nebraska.",
  bbox: [-124.8, 24.5, -66.9, 49.4], width: 680, height: 430,
  states: true,
  fill: [
    { kind: "a", states: ["Alabama", "Arkansas", "California", "Connecticut", "Delaware", "Florida", "Georgia", "Illinois", "Indiana", "Kentucky", "Louisiana", "Maryland", "Mississippi", "Missouri", "New Jersey", "New York", "North Carolina", "South Carolina", "Tennessee", "Texas", "Virginia", "West Virginia", "Wisconsin"] },
    { kind: "b", states: ["Iowa", "Maine", "Massachusetts", "Michigan", "Minnesota", "Montana", "Nebraska", "New Hampshire", "Ohio", "Oregon", "Pennsylvania", "Rhode Island", "South Dakota", "Vermont", "Washington", "Wyoming"] },
    { kind: "c", states: ["Colorado", "Idaho", "Kansas", "Nevada"] },
    { kind: "d", states: ["North Dakota"] },
  ],
  places: [
    { name: "Omaha", at: [-95.94, 41.26], label: "right" },
  ],
  legend: [
    { kind: "a", text: "Cleveland (Democrat), 277 electoral votes" },
    { kind: "b", text: "Harrison (Republican), 145" },
    { kind: "c", text: "Weaver (People's Party), 22" },
    { kind: "d", text: "Split among all three" },
  ],
  legendAt: "bottom-left", legendWidth: 270,
  checked: CHECKED,
};

export const maps = [e1896, e1892];

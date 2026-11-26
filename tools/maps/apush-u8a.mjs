// Map specs for AP U.S. History Unit 8 review, 8.1 to 8.8 (drawn by tools/build-maps.mjs apush).
// Coordinates are [longitude, latitude].

const election1948 = {
  id: "u8a-election-1948",
  caption: "The presidential election of 1948: electoral votes by state (present-day state lines shown; Alaska and Hawaii were not yet states)",
  alt: "Map of the 48 states in 1948 with present-day state lines. Four Deep South states are shaded solid for Strom Thurmond of the States' Rights Democratic Party: South Carolina, Alabama, Mississippi, and Louisiana. Sixteen states are hatched for Thomas Dewey, the Republican: Maine, Vermont, New Hampshire, Connecticut, New York, New Jersey, Pennsylvania, Delaware, Maryland, Michigan, Indiana, Kansas, Nebraska, North Dakota, South Dakota, and Oregon. The other twenty-eight states, across the rest of the South, the Midwest, and the West, are gray for Harry Truman, the Democrat. Tennessee is gray; it gave one of its twelve electoral votes to Thurmond.",
  bbox: [-124.8, 24.5, -66.9, 49.4], width: 680, height: 430,
  states: true,
  fill: [
    { kind: "a", states: ["South Carolina", "Alabama", "Mississippi", "Louisiana"] },
    { kind: "b", states: ["Connecticut", "Delaware", "Indiana", "Kansas", "Maine", "Maryland", "Michigan", "Nebraska", "New Hampshire", "New Jersey", "New York", "North Dakota", "Oregon", "Pennsylvania", "South Dakota", "Vermont"] },
    { kind: "c", states: ["Arizona", "Arkansas", "California", "Colorado", "Florida", "Georgia", "Idaho", "Illinois", "Iowa", "Kentucky", "Massachusetts", "Minnesota", "Missouri", "Montana", "Nevada", "New Mexico", "North Carolina", "Ohio", "Oklahoma", "Rhode Island", "Tennessee", "Texas", "Utah", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"] },
  ],
  places: [],
  legend: [
    { kind: "c", text: "Truman (Democrat), 303 electoral votes" },
    { kind: "b", text: "Dewey (Republican), 189" },
    { kind: "a", text: "Thurmond (States' Rights), 39" },
  ],
  legendAt: "bottom-left", legendWidth: 250,
  checked: ["The American Presidency Project, \"1948 Presidential Election\" (presidency.ucsb.edu/statistics/elections/1948)", "National Archives, \"1948 Electoral College Results\" (archives.gov/electoral-college/1948)"],
};

const korea = {
  id: "u8a-korea-1950",
  caption: "The Korean War, 1950 to 1953",
  alt: "Map of the Korean peninsula between China and Japan. A line across the peninsula marks the 38th parallel, the dividing line set after World War II. Dots mark Pyongyang in the north and Seoul, Inchon, and Pusan in the south. A sea route runs from Pusan around the southern tip of the peninsula and up the west coast to Inchon, marking the UN landing of September 1950. A second arrow runs south from the Yalu River on the Chinese border, marking the entry of Chinese forces in October and November 1950. A star marks Panmunjom, just south of the 38th parallel near its western end, where the armistice was signed in July 1953.",
  bbox: [123.3, 33.4, 131.6, 42.6], width: 560, height: 560,
  places: [
    { name: "Pyongyang", at: [125.75, 39.02], label: "left" },
    { name: "Seoul", at: [126.98, 37.57], label: "right" },
    { name: "Inchon landing,\nSept. 1950", at: [126.63, 37.46], kind: "battle", label: "left" },
    { name: "Pusan", at: [129.04, 35.1], kind: "major", label: "right" },
    { name: "Panmunjom\n(armistice, July 1953)", at: [126.68, 37.96], kind: "major", label: "right" },
  ],
  routes: [
    { through: [[124.6, 38.0], [128.7, 38.0]], kind: "route" },
    { through: [[129.2, 34.95], [128.2, 34.4], [126.7, 34.1], [125.8, 34.6], [125.7, 35.8], [126.1, 36.8], [126.5, 37.35]], kind: "sea" },
    { through: [[126.3, 40.9], [126.4, 40.2], [126.6, 39.6]], kind: "route2" },
  ],
  regions: [
    { name: "CHINA", at: [124.6, 41.8], size: 14 },
    { name: "JAPAN", at: [130.6, 33.9], size: 13 },
    { name: "Yalu River", at: [125.3, 40.65], size: 11 },
    { name: "38th parallel", at: [129.6, 38.0], size: 11 },
    { name: "Sea of Japan", at: [130.4, 39.5], size: 11 },
    { name: "Yellow Sea", at: [124.3, 36.6], size: 11 },
  ],
  legend: [
    { kind: "route", text: "38th parallel, the line dividing Korea in 1945" },
    { kind: "sea", text: "UN landing at Inchon, Sept. 1950" },
    { kind: "route2", text: "Chinese forces enter, Oct. to Nov. 1950" },
  ],
  legendAt: "bottom-left", legendWidth: 260,
  checked: ["National Park Service, Korean War Veterans Memorial, \"Korean War Overview\" (nps.gov/kowa)", "U.S. Army, \"The Korean War\" (army.mil/article/248681)"],
};

export const maps = [election1948, korea];

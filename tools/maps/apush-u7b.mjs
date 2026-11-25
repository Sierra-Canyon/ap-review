// Map specs for AP U.S. History Unit 7 review, 7.9 to 7.15 (drawn by tools/build-maps.mjs apush).
// Coordinates are [longitude, latitude].

const aggression = {
  id: "u7b-aggression",
  caption: "Acts of aggression by Japan, Italy, and Germany, 1931 to 1939, with the year of each",
  alt: "Map of Europe, Africa, and Asia with eight labeled points. In Asia: Mukden, Manchuria, 1931, and Beijing, China, 1937 (Japan). In Africa: Addis Ababa, Ethiopia, 1935 (Italy). In Europe: the Rhineland at Cologne, 1936; Vienna, Austria, 1938; Munich, 1938, with the Sudetenland; Prague, 1939; and Warsaw, Poland, 1939 (Germany).",
  bbox: [-12, 2, 128, 58], width: 680, height: 400,
  places: [
    { name: "Rhineland 1936", at: [6.96, 50.94], label: "left" },
    { name: "Munich conference 1938", at: [11.58, 48.14], label: [-150, 22] },
    { name: "Vienna 1938", at: [16.37, 48.21], label: [6, 14] },
    { name: "Prague 1939", at: [14.42, 50.08], label: [-30, -10] },
    { name: "Warsaw 1939", at: [21.01, 52.23], label: "right" },
    { name: "Addis Ababa 1935", at: [38.75, 9.03], label: "right" },
    { name: "Mukden 1931", at: [123.43, 41.8], label: "left" },
    { name: "Beijing 1937", at: [116.4, 39.9], label: "left" },
  ],
  regions: [
    { name: "GERMANY", at: [10.5, 52.6], size: 10 },
    { name: "ITALY", at: [12.5, 42.6], size: 10 },
    { name: "ETHIOPIA", at: [40, 6], size: 10 },
    { name: "MANCHURIA", at: [126, 46.5], size: 10 },
    { name: "CHINA", at: [108, 33], size: 12 },
    { name: "JAPAN", at: [127.5, 35], size: 10 },
    { name: "SOVIET UNION", at: [62, 54], size: 12 },
  ],
  checked: ["United States Holocaust Memorial Museum, Holocaust Encyclopedia, \"World War II: Key Dates\" and \"German Foreign Policy, 1933 to 1945\"", "Wikipedia, \"Causes of World War II\""],
};

const camps = {
  id: "u7b-camps",
  caption: "The ten War Relocation Authority camps for Japanese Americans, 1942 to 1946 (present-day state lines shown)",
  alt: "Map of the western and central United States with present-day state lines. Ten dots mark the War Relocation Authority camps: Tule Lake and Manzanar in California; Minidoka in Idaho; Heart Mountain in Wyoming; Topaz in Utah; Poston and Gila River in Arizona; Granada, also called Amache, in Colorado; and Rohwer and Jerome in Arkansas. Larger dots mark Seattle, Portland, San Francisco, and Los Angeles on the West Coast.",
  bbox: [-125, 30.5, -89, 49.5], width: 660, height: 420,
  states: true,
  places: [
    { name: "Seattle", at: [-122.33, 47.61], kind: "major", label: "right" },
    { name: "Portland", at: [-122.68, 45.52], kind: "major", label: "right" },
    { name: "San Francisco", at: [-122.42, 37.77], kind: "major", label: "left" },
    { name: "Los Angeles", at: [-118.24, 34.05], kind: "major", label: "left" },
    { name: "Tule Lake", at: [-121.37, 41.89], label: "right" },
    { name: "Manzanar", at: [-118.15, 36.73], label: "right" },
    { name: "Minidoka", at: [-114.24, 42.68], label: "right" },
    { name: "Heart Mountain", at: [-108.95, 44.67], label: "right" },
    { name: "Topaz", at: [-112.77, 39.42], label: "right" },
    { name: "Poston", at: [-114.4, 33.99], label: "left" },
    { name: "Gila River", at: [-111.8, 33.06], label: "right" },
    { name: "Granada (Amache)", at: [-102.33, 38.05], label: "right" },
    { name: "Rohwer", at: [-91.28, 33.76], label: "above" },
    { name: "Jerome", at: [-91.47, 33.4], label: "below" },
  ],
  legend: [
    { kind: "city", text: "War Relocation Authority camp" },
    { kind: "major", text: "West Coast city" },
  ],
  legendAt: "bottom-left", legendWidth: 230,
  checked: ["National Park Service, \"War Relocation Centers\"", "National Park Service, Confinement and Ethnicity: An Overview of World War II Japanese American Relocation Sites, chapter 1"],
};

const pacific = {
  id: "u7b-pacific",
  caption: "Major battles of the war in the Pacific, 1941 to 1945, with the year of each",
  alt: "Map of the Pacific Ocean from East Asia to Hawaii. Points mark Pearl Harbor, Hawaii, 1941; Midway, 1942; Guadalcanal in the Solomon Islands, 1942 to 1943; Tarawa in the Gilbert Islands, 1943; Saipan in the Mariana Islands, 1944; Leyte Gulf in the Philippines, 1944; Iwo Jima, 1945; Okinawa, 1945; and Hiroshima and Nagasaki in Japan, 1945.",
  bbox: [112, -14, 205, 46], width: 680, height: 420,
  places: [
    { name: "Pearl Harbor 1941", at: [-157.95, 21.35], kind: "battle", label: "below" },
    { name: "Midway 1942", at: [-177.37, 28.21], kind: "battle", label: "above" },
    { name: "Guadalcanal 1942 to 1943", at: [160.0, -9.5], kind: "battle", label: "right" },
    { name: "Tarawa 1943", at: [172.98, 1.42], kind: "battle", label: "right" },
    { name: "Saipan 1944", at: [145.75, 15.18], kind: "battle", label: "right" },
    { name: "Leyte Gulf 1944", at: [125.5, 10.8], kind: "battle", label: "left" },
    { name: "Iwo Jima 1945", at: [141.32, 24.78], kind: "battle", label: "right" },
    { name: "Okinawa 1945", at: [127.8, 26.4], kind: "battle", label: "left" },
    { name: "Hiroshima 1945", at: [132.46, 34.39], kind: "major", label: [8, -8] },
    { name: "Nagasaki 1945", at: [129.87, 32.75], kind: "major", label: "left" },
  ],
  regions: [
    { name: "JAPAN", at: [138.5, 38.5], size: 11 },
    { name: "CHINA", at: [116, 32], size: 11 },
    { name: "PHILIPPINES", at: [121, 16.5], size: 9 },
    { name: "AUSTRALIA", at: [135, -12], size: 10 },
    { name: "PACIFIC OCEAN", at: [180, 12], size: 13 },
    { name: "HAWAII", at: [-155.5, 18], size: 9 },
  ],
  legend: [
    { kind: "battle", text: "Battle" },
    { kind: "major", text: "Atomic bombing" },
  ],
  legendAt: "bottom-right", legendWidth: 170,
  checked: ["National Park Service, Pearl Harbor National Memorial, \"Pacific Battles\"", "PBS American Experience, \"The War in the Pacific, 1944 to 1945\", and Wikipedia, \"Pacific War\""],
};

const elections = {
  id: "u7b-elections",
  caption: "The presidential elections of 1928 and 1932 by state (present-day state lines shown)",
  alt: "Map of the 48 contiguous states. Eight states are solid: Massachusetts, Rhode Island, South Carolina, Georgia, Alabama, Mississippi, Louisiana, and Arkansas, which voted Democratic in both 1928 and 1932. Six states are gray: Maine, Vermont, New Hampshire, Connecticut, Pennsylvania, and Delaware, which voted Republican, for Herbert Hoover, in both years. The other 34 states are hatched: they voted for Hoover in 1928 and for the Democrat Franklin D. Roosevelt in 1932.",
  bbox: [-124.5, 24.5, -67, 49.5], width: 680, height: 420,
  states: true,
  fill: [
    { kind: "a", states: ["Massachusetts", "Rhode Island", "South Carolina", "Georgia", "Alabama", "Mississippi", "Louisiana", "Arkansas"] },
    { kind: "b", states: ["Washington", "Oregon", "California", "Nevada", "Idaho", "Montana", "Wyoming", "Utah", "Arizona", "New Mexico", "Colorado", "North Dakota", "South Dakota", "Nebraska", "Kansas", "Oklahoma", "Texas", "Minnesota", "Iowa", "Missouri", "Wisconsin", "Illinois", "Michigan", "Indiana", "Ohio", "Kentucky", "Tennessee", "West Virginia", "Virginia", "North Carolina", "Florida", "Maryland", "New Jersey", "New York"] },
    { kind: "c", states: ["Maine", "Vermont", "New Hampshire", "Connecticut", "Pennsylvania", "Delaware"] },
  ],
  legend: [
    { kind: "a", text: "Democratic in 1928 and 1932" },
    { kind: "b", text: "Hoover in 1928, Roosevelt in 1932" },
    { kind: "c", text: "Hoover in 1928 and 1932" },
  ],
  legendAt: "bottom-left", legendWidth: 250,
  checked: ["The American Presidency Project, election results for 1928 and 1932", "Wikipedia, \"1928 United States presidential election\" and \"1932 United States presidential election\""],
};

export const maps = [aggression, camps, pacific, elections];

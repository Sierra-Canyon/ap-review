// AP U.S. History Unit 2 maps (review bank, decks/apush/u2.js). Spec format: tools/build-maps.mjs. HANDOFF.md, section 2e.
// Each place and its founding power was checked with WebFetch against National Park Service pages (Santa Fe, San Antonio
// Missions, Jean Lafitte NHP on New Orleans, Cadillac and Detroit, Martin Van Buren NHS on New Netherland) and Encyclopaedia
// Britannica (Pensacola, Montreal, Alabama history on Mobile, Detroit).

const settlements = {
  id: "u2-settlements",
  caption: "Some French, Spanish, and Dutch settlements in North America founded from 1610 to 1718, with the founding power (present-day state lines shown)",
  alt: "Map of eastern and southern North America with present-day state lines. Settlements founded by Spain: Santa Fe on the upper Rio Grande, Pensacola on the Gulf coast of Florida, and San Antonio in Texas. Settlements founded by France: Montreal on the St. Lawrence River, Detroit between Lakes Huron and Erie, Mobile on the Gulf coast, and New Orleans near the mouth of the Mississippi River. A settlement founded by the Dutch: New Amsterdam at the mouth of the Hudson River. No settlements are marked along the rest of the Atlantic coast.",
  bbox: [-108, 26, -62, 48], width: 720, height: 450, states: true,
  regions: [
    { name: "Atlantic Ocean", at: [-69.5, 34.0], size: 12 },
    { name: "Gulf of Mexico", at: [-90.0, 26.9], size: 11 },
    { name: "Mississippi River", at: [-93.6, 33.0], size: 9 },
    { name: "St. Lawrence River", at: [-71.0, 47.6], size: 9 },
  ],
  places: [
    { name: "Santa Fe (Spain)", at: [-105.94, 35.69], label: "right" },
    { name: "San Antonio (Spain)", at: [-98.49, 29.42], label: "left" },
    { name: "Pensacola (Spain)", at: [-87.22, 30.42], label: "right" },
    { name: "Montreal (France)", at: [-73.57, 45.5], label: "left" },
    { name: "Detroit (France)", at: [-83.05, 42.33], label: "left" },
    { name: "Mobile (France)", at: [-88.04, 30.69], label: "above" },
    { name: "New Orleans (France)", at: [-90.07, 29.95], label: "below" },
    { name: "New Amsterdam (Dutch)", at: [-74.01, 40.71], label: "right" },
  ],
  checked: ["National Park Service pages for each site", "Encyclopaedia Britannica"],
};

export const maps = [settlements];

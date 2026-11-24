// AP U.S. History Unit 2 maps (review bank, decks/apush/u2.js). Spec format: tools/build-maps.mjs. HANDOFF.md, section 2e.

const settlements = {
  id: "u2-settlements",
  caption: "Some European settlements in North America founded from 1610 to 1718, with the founding power and year (present-day state lines shown)",
  alt: "Map of eastern and southern North America with present-day state lines. Settlements founded by Spain: Santa Fe on the upper Rio Grande, 1610; Pensacola on the Gulf coast of Florida, 1698; and San Antonio in Texas, 1718. Settlements founded by France: Montreal on the St. Lawrence River, 1642; Detroit between Lakes Huron and Erie, 1701; Mobile on the Gulf coast, 1702; Kaskaskia on the Mississippi River in the Illinois country, 1703; and New Orleans near the mouth of the Mississippi, 1718. Settlements founded by the Dutch: Fort Orange on the upper Hudson River, 1624, and New Amsterdam at the mouth of the Hudson, 1625, both taken by England in 1664. Settlements founded by England: Plymouth, 1620, and Boston, 1630, in New England; Charles Town in Carolina, 1670; and Philadelphia on the Delaware River, 1682.",
  bbox: [-108, 26, -64, 48], width: 720, height: 450, states: true,
  regions: [
    { name: "Atlantic Ocean", at: [-69.5, 34.0], size: 12 },
    { name: "Gulf of Mexico", at: [-90.0, 26.9], size: 11 },
    { name: "Mississippi River", at: [-93.4, 35.2], size: 9 },
    { name: "St. Lawrence River", at: [-71.0, 47.6], size: 9 },
  ],
  places: [
    { name: "Santa Fe (Spain) 1610", at: [-105.94, 35.69], label: "right" },
    { name: "San Antonio (Spain) 1718", at: [-98.49, 29.42], label: "right" },
    { name: "Pensacola (Spain) 1698", at: [-87.22, 30.42], label: [6, 14] },
    { name: "Montreal (France) 1642", at: [-73.57, 45.5], label: "left" },
    { name: "Detroit (France) 1701", at: [-83.05, 42.33], label: "left" },
    { name: "Kaskaskia (France) 1703", at: [-89.91, 37.92], label: "left" },
    { name: "Mobile (France) 1702", at: [-88.04, 30.69], label: [-8, -8] },
    { name: "New Orleans (France) 1718", at: [-90.07, 29.95], label: "left" },
    { name: "Fort Orange (Dutch) 1624", at: [-73.75, 42.65], label: "left" },
    { name: "New Amsterdam (Dutch) 1625", at: [-74.01, 40.71], label: "right" },
    { name: "Plymouth (England) 1620", at: [-70.67, 41.96], label: "right" },
    { name: "Boston (England) 1630", at: [-71.06, 42.36], label: [6, -8] },
    { name: "Philadelphia (England) 1682", at: [-75.17, 39.95], label: "left" },
    { name: "Charles Town (England) 1670", at: [-79.93, 32.78], label: "right" },
  ],
  checked: ["Encyclopaedia Britannica's entry for each settlement", "Alan Taylor, American Colonies (2001)"],
};

export const maps = [settlements];

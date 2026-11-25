// Map specs for AP U.S. History Unit 4 (4.8 to 4.14), review bank u4b. Drawn by tools/build-maps.mjs apush.
// Coordinates are [longitude, latitude]. Shading uses present-day state lines; captions say where the lines differ.

const election1832 = {
  id: "u4b-election1832",
  caption: "Electoral votes by state in the presidential election of 1832 (present-day state lines shown; Virginia then included present-day West Virginia, which is shaded with it; Maryland split its votes and is not shaded; territories are not shaded)",
  alt: "Map of the eastern and central United States with present-day state lines, showing the 24 states of 1832. States whose electoral votes went to Andrew Jackson are shaded solid: Maine, New Hampshire, New York, New Jersey, Pennsylvania, Ohio, Indiana, Illinois, Missouri, Virginia with West Virginia, North Carolina, Georgia, Alabama, Mississippi, Louisiana, and Tennessee. States whose votes went to Henry Clay are hatched: Massachusetts, Rhode Island, Connecticut, Delaware, and Kentucky. Vermont, which voted for William Wirt of the Anti-Masonic Party, is gray. South Carolina, whose legislature gave its votes to John Floyd, is dotted. Maryland, unshaded, split its votes, 5 for Clay and 3 for Jackson. Totals: Jackson 219, Clay 49, Floyd 11, Wirt 7.",
  bbox: [-98, 26, -66, 48.5], width: 620, height: 430,
  states: true,
  fill: [
    { kind: "a", states: ["Maine", "New Hampshire", "New York", "New Jersey", "Pennsylvania", "Ohio", "Indiana", "Illinois", "Missouri", "Virginia", "West Virginia", "North Carolina", "Georgia", "Alabama", "Mississippi", "Louisiana", "Tennessee"] },
    { kind: "b", states: ["Massachusetts", "Rhode Island", "Connecticut", "Delaware", "Kentucky"] },
    { kind: "c", states: ["Vermont"] },
    { kind: "d", states: ["South Carolina"] },
  ],
  regions: [
    { name: "Maryland split:", at: [-70.6, 36.4], size: 10 },
    { name: "Clay 5, Jackson 3", at: [-70.6, 35.5], size: 10 },
  ],
  legend: [
    { kind: "a", text: "Jackson (Democrat), 219 votes" },
    { kind: "b", text: "Clay (National Republican), 49" },
    { kind: "c", text: "Wirt (Anti-Masonic), 7" },
    { kind: "d", text: "Floyd (chosen by S.C. legislature), 11" },
  ],
  legendAt: "bottom-right", legendWidth: 272,
  checked: ["the American Presidency Project, \"Election of 1832\"", "the National Archives, Electoral College results, 1832"],
};

export const maps = [election1832];

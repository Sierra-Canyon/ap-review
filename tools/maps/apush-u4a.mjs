// Map specs for AP U.S. History Unit 4 (4.1 to 4.7), review bank u4a. Drawn by tools/build-maps.mjs apush.
// Coordinates are [longitude, latitude]. Shading uses present-day state lines; captions say where the lines differ.

const missouri = {
  id: "u4a-missouri1821",
  caption: "Free and slave states after the Missouri Compromise, 1820 to 1821 (present-day state lines shown; Virginia then included present-day West Virginia, which is shaded with it; territories are not shaded)",
  alt: "Map of the eastern and central United States with present-day state lines. Twelve slave states are shaded solid: Delaware, Maryland, Virginia with West Virginia, North Carolina, South Carolina, Georgia, Kentucky, Tennessee, Alabama, Mississippi, Louisiana, and Missouri. Twelve free states are shaded gray: Maine, New Hampshire, Vermont, Massachusetts, Rhode Island, Connecticut, New York, New Jersey, Pennsylvania, Ohio, Indiana, and Illinois. A line at 36 degrees 30 minutes north runs west from Missouri's southwestern corner to the 100th meridian. North of the line, the rest of the Louisiana Purchase is labeled closed to slavery; south of it, Arkansas Territory is labeled open to slavery. Missouri, north of the line, is labeled a slave state admitted in 1821, and Maine a free state admitted in 1820.",
  bbox: [-106, 26, -66, 49.5], width: 640, height: 430,
  states: true,
  fill: [
    { kind: "a", states: ["Delaware", "Maryland", "Virginia", "West Virginia", "North Carolina", "South Carolina", "Georgia", "Kentucky", "Tennessee", "Alabama", "Mississippi", "Louisiana", "Missouri"] },
    { kind: "c", states: ["Maine", "New Hampshire", "Vermont", "Massachusetts", "Rhode Island", "Connecticut", "New York", "New Jersey", "Pennsylvania", "Ohio", "Indiana", "Illinois"] },
  ],
  routes: [
    { kind: "route", through: [[-94.62, 36.5], [-97, 36.5], [-100, 36.5]] },
  ],
  regions: [
    { name: "Louisiana Purchase land", at: [-99, 43.6], size: 11 },
    { name: "closed to slavery", at: [-99, 42.4], size: 11 },
    { name: "36°30′ line", at: [-98.6, 35.7], size: 10 },
    { name: "Arkansas Territory:", at: [-95.2, 34.4], size: 10 },
    { name: "slavery allowed", at: [-95.2, 33.4], size: 10 },
    { name: "Missouri:", at: [-92.4, 38.9], size: 10 },
    { name: "slave state, 1821", at: [-92.4, 37.9], size: 10 },
    { name: "Maine, free state, 1820", at: [-71.5, 47.4], size: 10 },
    { name: "Spanish land", at: [-101.5, 31.6], size: 10 },
    { name: "(Mexico from 1821)", at: [-101.5, 30.6], size: 10 },
  ],
  legend: [
    { kind: "a", text: "Slave states" },
    { kind: "c", text: "Free states" },
    { kind: "route", text: "36°30′ line (Missouri Compromise)" },
  ],
  legendAt: "bottom-right", legendWidth: 230,
  checked: ["the National Archives, Milestone Documents, \"Missouri Compromise (1820)\"", "the U.S. Census Bureau, History, \"The Missouri Compromise of 1820\" (March 2025)"],
};

const election1828 = {
  id: "u4a-election1828",
  caption: "Electoral votes by state in the presidential election of 1828 (present-day state lines shown; Virginia then included present-day West Virginia, which is shaded with it; territories are not shaded)",
  alt: "Map of the eastern and central United States with present-day state lines, showing the 24 states of 1828. States whose electoral votes all went to Andrew Jackson are shaded solid: Pennsylvania, Virginia with West Virginia, North Carolina, South Carolina, Georgia, Alabama, Mississippi, Louisiana, Tennessee, Kentucky, Ohio, Indiana, Illinois, and Missouri. States whose votes all went to John Quincy Adams are hatched: New Hampshire, Vermont, Massachusetts, Rhode Island, Connecticut, New Jersey, and Delaware. Three states that split their electoral votes are dotted: Maine, New York, and Maryland. Jackson's states cover the South and the West; Adams's lie in New England and the Middle Atlantic.",
  bbox: [-98, 26, -66, 48.5], width: 620, height: 430,
  states: true,
  fill: [
    { kind: "a", states: ["Pennsylvania", "Virginia", "West Virginia", "North Carolina", "South Carolina", "Georgia", "Alabama", "Mississippi", "Louisiana", "Tennessee", "Kentucky", "Ohio", "Indiana", "Illinois", "Missouri"] },
    { kind: "b", states: ["New Hampshire", "Vermont", "Massachusetts", "Rhode Island", "Connecticut", "New Jersey", "Delaware"] },
    { kind: "d", states: ["Maine", "New York", "Maryland"] },
  ],
  legend: [
    { kind: "a", text: "Jackson won all electoral votes" },
    { kind: "b", text: "Adams won all electoral votes" },
    { kind: "d", text: "Electoral votes split" },
  ],
  legendAt: "bottom-right", legendWidth: 230,
  checked: ["the American Presidency Project, \"Presidential Election of 1828\"", "the National Archives, Electoral College results, 1828"],
};

export const maps = [missouri, election1828];

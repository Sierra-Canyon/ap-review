// Map specs for AP U.S. History Unit 5 review, 5.7 to 5.12 (drawn by tools/build-maps.mjs apush).
// Coordinates are [longitude, latitude]. Present-day state lines are shaded; captions say where they differ from 1861 to 1877.

const secession = {
  id: "u5b-secession",
  caption: "The slave states and secession, December 1860 to June 1861 (present-day state lines shown; West Virginia, then part of Virginia, is left unshaded)",
  alt: "Map of the eastern and southern United States with present-day state lines. Seven states of the Deep South are shaded solid: South Carolina, Mississippi, Florida, Alabama, Georgia, Louisiana, and Texas, which seceded between December 1860 and February 1861. Four states of the Upper South are hatched: Virginia, Arkansas, Tennessee, and North Carolina, which seceded between April and June 1861. Four slave states are gray: Delaware, Maryland, Kentucky, and Missouri, which stayed in the Union. West Virginia is unshaded. Dots mark Washington, D.C.; Richmond, Virginia; Montgomery, Alabama; and Charleston, South Carolina, at Fort Sumter.",
  bbox: [-106.8, 24.5, -73.5, 40.8], width: 660, height: 440,
  states: true,
  fill: [
    { kind: "a", states: ["South Carolina", "Mississippi", "Florida", "Alabama", "Georgia", "Louisiana", "Texas"] },
    { kind: "b", states: ["Virginia", "Arkansas", "Tennessee", "North Carolina"] },
    { kind: "c", states: ["Delaware", "Maryland", "Kentucky", "Missouri"] },
  ],
  places: [
    { name: "Washington, D.C.", at: [-77.04, 38.9], kind: "major", label: "right" },
    { name: "Richmond", at: [-77.44, 37.54], label: "right" },
    { name: "Montgomery", at: [-86.3, 32.37], label: "left" },
    { name: "Fort Sumter\n(Charleston)", at: [-79.87, 32.75], label: "right" },
  ],
  legend: [
    { kind: "a", text: "Seceded Dec. 1860 to Feb. 1861" },
    { kind: "b", text: "Seceded April to June 1861" },
    { kind: "c", text: "Slave states that stayed in the Union" },
  ],
  legendAt: "bottom-right", legendWidth: 250,
  checked: ["Encyclopaedia Britannica, \"Secession\" and \"Confederate States of America\"", "James M. McPherson, Battle Cry of Freedom (1988), chapters 8 and 9"],
};

export const maps = [secession];

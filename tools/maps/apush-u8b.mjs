// Map specs for AP U.S. History Unit 8 review, 8.9 to 8.15 (drawn by tools/build-maps.mjs apush).
// Coordinates are [longitude, latitude].

const election1968 = {
  id: "u8b-election-1968",
  caption: "The presidential election of 1968: electoral votes by state (present-day state lines shown; Alaska, won by Nixon, and Hawaii, won by Humphrey, are not shown; North Carolina gave 12 votes to Nixon and 1 to Wallace)",
  alt: "Map of the contiguous United States with state lines, shaded by the candidate who won each state's electoral votes in 1968. Solid: George Wallace, American Independent Party, won Alabama, Arkansas, Georgia, Louisiana, and Mississippi. Hatched: Hubert Humphrey, Democrat, won Texas, Minnesota, Michigan, Pennsylvania, New York, West Virginia, Maryland, Connecticut, Rhode Island, Massachusetts, Maine, Washington, and the District of Columbia. Gray: Richard Nixon, Republican, won the other states, including California, Illinois, Ohio, New Jersey, Virginia, North Carolina, South Carolina, Tennessee, Florida, Kentucky, and most of the West and Plains.",
  bbox: [-124.5, 24.5, -67, 49.4], width: 680, height: 440,
  states: true,
  fill: [
    { kind: "a", states: ["Alabama", "Arkansas", "Georgia", "Louisiana", "Mississippi"] },
    { kind: "b", states: ["Connecticut", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "New York", "Pennsylvania", "Rhode Island", "Texas", "Washington", "West Virginia", "District of Columbia"] },
    { kind: "c", states: ["Arizona", "California", "Colorado", "Delaware", "Florida", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "South Carolina", "South Dakota", "Tennessee", "Utah", "Vermont", "Virginia", "Wisconsin", "Wyoming"] },
  ],
  places: [],
  legend: [
    { kind: "c", text: "Nixon (Republican), 301 electoral votes" },
    { kind: "b", text: "Humphrey (Democrat), 191" },
    { kind: "a", text: "Wallace (American Independent), 46" },
  ],
  legendAt: "bottom-left", legendWidth: 270,
  checked: ["The American Presidency Project, \"1968 Election\" results by state", "National Archives, \"1968 Electoral College Results\""],
};

export const maps = [election1968];

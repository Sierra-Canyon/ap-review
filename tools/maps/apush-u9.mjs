// Map specs for AP U.S. History Unit 9 review (drawn by tools/build-maps.mjs apush).
// Coordinates are [longitude, latitude]. Present-day state lines; 2010 lines are the same as today's.

const apportion2010 = {
  id: "u9-apportionment-2010",
  caption: "Seats gained and lost in the U.S. House of Representatives in the apportionment after the 2010 census (present-day state lines shown; Alaska and Hawaii, unchanged, are not shown)",
  alt: "Map of the 48 contiguous states with state lines. Texas and Florida are shaded solid for gaining two or more House seats (Texas gained four, Florida two). Arizona, Georgia, Nevada, South Carolina, Utah, and Washington are hatched for gaining one seat. Illinois, Iowa, Louisiana, Massachusetts, Michigan, Missouri, New Jersey, and Pennsylvania are gray for losing one seat. New York and Ohio are dotted for losing two seats. All other states are unshaded, with no change.",
  bbox: [-124.8, 24.4, -66.9, 49.4], width: 680, height: 430,
  states: true,
  fill: [
    { kind: "a", states: ["Texas", "Florida"] },
    { kind: "b", states: ["Arizona", "Georgia", "Nevada", "South Carolina", "Utah", "Washington"] },
    { kind: "c", states: ["Illinois", "Iowa", "Louisiana", "Massachusetts", "Michigan", "Missouri", "New Jersey", "Pennsylvania"] },
    { kind: "d", states: ["New York", "Ohio"] },
  ],
  places: [],
  legend: [
    { kind: "a", text: "Gained 2 or more seats" },
    { kind: "b", text: "Gained 1 seat" },
    { kind: "c", text: "Lost 1 seat" },
    { kind: "d", text: "Lost 2 seats" },
  ],
  legendAt: "bottom-left", legendWidth: 190,
  checked: ["U.S. Census Bureau, 2010 Census Apportionment Results, Table D2 (seats gained and lost by state)", "Congressional Research Service, House Apportionment 2010: States Gaining, Losing, and on the Margin (R41584, 2011)"],
};

export const maps = [apportion2010];

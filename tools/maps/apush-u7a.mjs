// Map specs for AP U.S. History Unit 7 review, 7.1 to 7.8 (drawn by tools/build-maps.mjs apush).
// Coordinates are [longitude, latitude].

const caribbean = {
  id: "u7a-caribbean",
  caption: "U.S. territories and military occupations around the Caribbean, 1898 to 1934, with the year each began",
  alt: "Map of the Gulf of Mexico, the Caribbean Sea, and Central America. Large dots mark places that became U.S. territory: Puerto Rico in 1898, the Panama Canal Zone in 1903, and the Virgin Islands in 1917. Battle symbols mark places occupied by U.S. troops: Cuba in 1898 and again in 1906, Nicaragua in 1912, Veracruz, Mexico, in 1914, Haiti in 1915, and the Dominican Republic in 1916.",
  bbox: [-99, 7, -58, 28], width: 660, height: 420,
  places: [
    { name: "Puerto Rico 1898", at: [-66.5, 18.2], kind: "major", label: "below" },
    { name: "Canal Zone 1903", at: [-79.7, 9.1], kind: "major", label: "right" },
    { name: "Virgin Islands 1917", at: [-64.9, 18.34], kind: "major", label: "right" },
    { name: "Cuba 1898, 1906", at: [-79.5, 22.0], kind: "battle", label: "above" },
    { name: "Nicaragua 1912", at: [-85.2, 12.9], kind: "battle", label: "left" },
    { name: "Veracruz 1914", at: [-96.13, 19.18], kind: "battle", label: "above" },
    { name: "Haiti 1915", at: [-72.3, 18.9], kind: "battle", label: "below" },
    { name: "Dominican Rep. 1916", at: [-70.2, 18.9], kind: "battle", label: "above" },
  ],
  regions: [
    { name: "Gulf of Mexico", at: [-90.5, 25.2], size: 12 },
    { name: "Caribbean Sea", at: [-75.5, 14.5], size: 13 },
    { name: "UNITED STATES", at: [-91, 27.4], size: 11 },
    { name: "MEXICO", at: [-97.8, 23.5], size: 11 },
  ],
  legend: [
    { kind: "major", text: "Became U.S. territory" },
    { kind: "battle", text: "Occupied by U.S. troops" },
  ],
  legendAt: "bottom-left", legendWidth: 200,
  checked: ["Office of the Historian, U.S. Department of State, Milestones 1899 to 1913 and 1914 to 1920", "Encyclopaedia Britannica's entries for each country"],
};

const westernFront = {
  id: "u7a-aef",
  caption: "Major battles of the American Expeditionary Forces in France, 1918, with the main ports where U.S. troops landed",
  alt: "Map of France, Belgium, and western Germany. Dots mark Paris and Berlin and the French Atlantic ports of Brest and Saint-Nazaire, where many American troops landed. Battle symbols in northeastern France mark Cantigny (May 1918), Chateau-Thierry and Belleau Wood (June 1918), Saint-Mihiel (September 1918), and the Meuse-Argonne (September to November 1918).",
  bbox: [-5.5, 45.5, 14, 53.5], width: 660, height: 440,
  places: [
    { name: "Paris", at: [2.35, 48.86], kind: "major", label: "left" },
    { name: "Berlin", at: [13.4, 52.52], kind: "major", label: "left" },
    { name: "Brest", at: [-4.49, 48.39], kind: "city", label: "below" },
    { name: "Saint-Nazaire", at: [-2.21, 47.27], kind: "city", label: "below" },
    { name: "Cantigny, May 1918", at: [2.49, 49.66], kind: "battle", label: "above" },
    { name: "Chateau-Thierry and\nBelleau Wood, June 1918", at: [3.35, 49.05], kind: "battle", label: [-10, 30] },
    { name: "Saint-Mihiel, Sept. 1918", at: [5.54, 48.89], kind: "battle", label: [8, 22] },
    { name: "Meuse-Argonne,\nSept. to Nov. 1918", at: [5.05, 49.3], kind: "battle", label: [8, -18] },
  ],
  regions: [
    { name: "FRANCE", at: [1.5, 46.8], size: 13 },
    { name: "GERMANY", at: [10.2, 50.6], size: 13 },
    { name: "BELGIUM", at: [4.6, 50.75], size: 10 },
    { name: "Atlantic Ocean", at: [-4.2, 46.3], size: 11 },
    { name: "North Sea", at: [3.3, 53.0], size: 11 },
  ],
  legend: [
    { kind: "battle", text: "Battle with a major U.S. role" },
    { kind: "city", text: "Port where U.S. troops landed" },
  ],
  legendAt: "bottom-right", legendWidth: 230,
  checked: ["U.S. Army Center of Military History, American Armies and Battlefields in Europe (American Battle Monuments Commission, 1938)", "Encyclopaedia Britannica, \"World War I\" and \"Battle of the Meuse-Argonne\""],
};

const election1928 = {
  id: "u7a-1928",
  caption: "The presidential election of 1928 by state, showing the southern states that had voted Democratic in 1924 (present-day state lines; Alaska and Hawaii were not yet states)",
  alt: "Map of the 48 states. Eight states won by the Democrat Alfred E. Smith are shaded solid: Massachusetts and Rhode Island in New England and South Carolina, Georgia, Alabama, Mississippi, Louisiana, and Arkansas in the Deep South. Six southern states won by the Republican Herbert Hoover that had voted Democratic in 1924 are hatched: Virginia, North Carolina, Tennessee, Florida, Texas, and Oklahoma. All other states, won by Hoover, are gray.",
  bbox: [-124.8, 24.3, -66.9, 49.4], width: 700, height: 440,
  states: true,
  fill: [
    { kind: "a", states: ["Massachusetts", "Rhode Island", "South Carolina", "Georgia", "Alabama", "Mississippi", "Louisiana", "Arkansas"] },
    { kind: "b", states: ["Virginia", "North Carolina", "Tennessee", "Florida", "Texas", "Oklahoma"] },
    { kind: "c", states: ["Washington", "Oregon", "California", "Nevada", "Idaho", "Montana", "Wyoming", "Utah", "Arizona", "New Mexico", "Colorado", "North Dakota", "South Dakota", "Nebraska", "Kansas", "Minnesota", "Iowa", "Missouri", "Wisconsin", "Illinois", "Michigan", "Indiana", "Ohio", "Kentucky", "West Virginia", "Pennsylvania", "New York", "New Jersey", "Delaware", "Maryland", "Connecticut", "Vermont", "New Hampshire", "Maine"] },
  ],
  legend: [
    { kind: "a", text: "Won by Smith (Democrat)" },
    { kind: "b", text: "Won by Hoover; Democratic in 1924" },
    { kind: "c", text: "Won by Hoover (Republican)" },
  ],
  legendAt: "bottom-left", legendWidth: 250,
  checked: ["The American Presidency Project, election tables for 1924 and 1928", "Encyclopaedia Britannica, \"United States presidential election of 1928\""],
};

export const maps = [caribbean, westernFront, election1928];

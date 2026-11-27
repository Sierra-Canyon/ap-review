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
  checked: ["Congressional Research Service, Instances of Use of United States Armed Forces Abroad, 1798 to 2023", "Office of the Historian, U.S. Department of State (Milestones pages on Haiti, the Dominican Republic, and the Panama Canal; the 1916 Danish West Indies treaty), with the Treaty of Paris of 1898"],
};

const westernFront = {
  id: "u7a-aef",
  caption: "Major battles of the American Expeditionary Forces in France, 1918, with Brest, a main port where U.S. troops landed",
  alt: "Map of France, Belgium, and western Germany. Dots mark Paris and Berlin and the French Atlantic port of Brest, where many American troops landed. Battle symbols in northeastern France mark Cantigny (May 1918), Chateau-Thierry and Belleau Wood (June 1918), Saint-Mihiel (September 1918), and the Meuse-Argonne (September to November 1918).",
  bbox: [-5.5, 45.5, 14, 53.5], width: 660, height: 440,
  places: [
    { name: "Paris", at: [2.35, 48.86], kind: "major", label: "left" },
    { name: "Berlin", at: [13.4, 52.52], kind: "major", label: "left" },
    { name: "Brest", at: [-4.49, 48.39], kind: "city", label: "below" },
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
  checked: ["American Battle Monuments Commission pages on Cantigny, Chateau-Thierry and Belleau Wood, St. Mihiel, and American memorials in Europe", "National Park Service, World War I Memorial, \"The United States and the First World War\""],
};

export const maps = [caribbean, westernFront];

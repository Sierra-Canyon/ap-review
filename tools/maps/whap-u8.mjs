// Map specs for AP World History Unit 8 (Cold War and Decolonization), drawn by tools/build-maps.mjs.
// Coordinates are [longitude, latitude]. Every place, date, and route here is a claim the site makes: each map lists the
// references it was checked against. Routes and the zone border are approximate, and the captions say so.

const berlin = {
  id: "u8-berlin-airlift",
  caption: "The Berlin airlift, June 1948 to September 1949: the three air corridors from the western zones of Germany to Berlin (corridors and zone border approximate)",
  alt: "Map of occupied Germany in 1948. A dashed line runs from the Baltic coast near Lübeck south to the Czechoslovak border near Hof, marking the western edge of the Soviet zone. West of the line are the British zone in the north, the American zone in the south, and the French zone in the southwest. Berlin lies far east of the line, deep inside the Soviet zone, with Leipzig and Dresden also in the Soviet zone. Three solid lines, the air corridors, run to Berlin from Hamburg in the British zone, from Wunstorf near Hanover in the British zone, and from Frankfurt (Rhein-Main) in the American zone. Helmstedt, on the line, is marked as the road and rail crossing into the Soviet zone that the Soviets closed in June 1948.",
  bbox: [6.3, 49.5, 15.6, 55.0], width: 600, height: 520,
  regions: [
    { name: "Baltic Sea", at: [12.6, 54.75], size: 11 },
    { name: "BRITISH ZONE", at: [8.2, 52.75], size: 12 }, { name: "AMERICAN ZONE", at: [10.6, 49.95], size: 12 },
    { name: "FRENCH ZONE", at: [7.25, 50.45], size: 11 }, { name: "SOVIET ZONE", at: [12.9, 51.75], size: 13 },
    { name: "POLAND", at: [15.15, 53.3], size: 10 }, { name: "CZECHOSLOVAKIA", at: [14.2, 50.0], size: 10 },
  ],
  routes: [
    // the western edge of the Soviet zone, which became the border between the two German states in 1949 (approximate)
    { kind: "route2", through: [[10.9, 53.96], [10.8, 53.86], [10.85, 53.68], [10.9, 53.55], [10.65, 53.37], [11.05, 53.16], [11.25, 53.13], [11.57, 53.04],
      [10.95, 52.85], [10.9, 52.7], [11.0, 52.55], [10.95, 52.4], [11.05, 52.22], [11.0, 52.1], [10.62, 51.85], [10.65, 51.7], [10.64, 51.58], [10.33, 51.5],
      [9.97, 51.33], [10.15, 51.12], [10.2, 50.98], [9.93, 50.72], [10.05, 50.55], [10.25, 50.48], [10.5, 50.38], [11.05, 50.32], [11.35, 50.5], [11.85, 50.42], [12.1, 50.32]] },
    { through: [[9.99, 53.55], [13.4, 52.52]] },
    { through: [[9.46, 52.46], [13.4, 52.52]] },
    { through: [[8.57, 50.03], [13.4, 52.52]] },
  ],
  places: [
    { name: "Berlin", at: [13.4, 52.52], kind: "major", label: "right" },
    { name: "Hamburg", at: [9.99, 53.55], label: "left" },
    { name: "Wunstorf\n(near Hanover)", at: [9.46, 52.46], label: "left" },
    { name: "Frankfurt\n(Rhein-Main)", at: [8.57, 50.03], label: [-7, 14] },
    { name: "Helmstedt: road and rail\ncrossing, closed June 1948", at: [11.01, 52.23], label: [-7, 16] },
    { name: "Leipzig", at: [12.37, 51.34], label: "right" },
    { name: "Dresden", at: [13.74, 51.05], label: "right" },
  ],
  legend: [{ kind: "route", text: "Air corridor to Berlin" }, { kind: "route2", text: "Western edge of the Soviet zone" }, { kind: "city", text: "Airlift base or city" }],
  legendAt: "top-left", legendWidth: 230,
  checked: ["Roger G. Miller, To Save a City: The Berlin Airlift, 1948 to 1949 (U.S. Air Force History and Museums Program, 2000), the corridors (Hamburg, Bückeburg near Hanover, Frankfurt) and the bases, and the Office of the Historian, U.S. Department of State, \"The Berlin Airlift, 1948 to 1949\"", "Encyclopaedia Britannica, \"Berlin blockade and airlift\" (blockade 24 June 1948 to 12 May 1949, airlift to 30 September 1949), and the course of the inner German border at each named town from Britannica's entries"],
};

const biafra = {
  id: "u8-biafra",
  caption: "The Nigerian Civil War, 1967 to 1970: Biafra declared independence on May 30, 1967, and surrendered in January 1970 (relief route approximate)",
  alt: "Map of Nigeria and the Gulf of Guinea during the civil war of 1967 to 1970. The north is labeled mostly Hausa and Fulani, the southwest mostly Yoruba, and the southeast mostly Igbo. Lagos, the federal capital, is in the southwest. In the southeast, Enugu, Biafra's capital, was taken by federal troops in October 1967. On the coast, Port Harcourt, an oil refinery and port, was taken in May 1968, and Bonny, an oil export terminal, lies at the sea. West of the Niger, Benin City was reached by Biafran troops in August 1967, and their advance toward Lagos was stopped at Ore the same month. Inland in the southeast, Owerri was taken in January 1970, at the end of the war. A dashed line runs from the island of São Tomé, far out in the Gulf of Guinea, north to the Uli airstrip in the southeast, marking night relief flights.",
  bbox: [2.4, -0.4, 10.6, 9.6], width: 560, height: 640,
  regions: [
    { name: "Gulf of Guinea", at: [4.6, 3.6], size: 12 },
    { name: "Mostly Hausa and Fulani", at: [7.6, 9.0], size: 12 }, { name: "Mostly Yoruba", at: [4.3, 7.9], size: 12 },
    { name: "Mostly Igbo", at: [8.4, 5.7], size: 12 },
  ],
  routes: [{ kind: "route2", through: [[6.73, 0.34], [6.86, 5.79]] }],
  places: [
    { name: "Lagos, federal capital", at: [3.38, 6.52], kind: "major", label: "below" },
    { name: "Ore: Biafran advance\nstopped, Aug. 1967", at: [4.87, 6.75], kind: "battle", label: [0, -24] },
    { name: "Benin City: reached by\nBiafran troops, Aug. 1967", at: [5.63, 6.34], label: "right" },
    { name: "Enugu, Biafra's capital:\ntaken Oct. 1967", at: [7.49, 6.44], kind: "major", label: [7, -16] },
    { name: "Uli airstrip", at: [6.86, 5.79], label: "left" },
    { name: "Owerri: taken Jan. 1970", at: [7.03, 5.48], label: "right" },
    { name: "Port Harcourt, oil refinery\nand port: taken May 1968", at: [7.01, 4.82], label: "right" },
    { name: "Bonny oil terminal", at: [7.17, 4.45], label: [7, 12] },
    { name: "São Tomé", at: [6.73, 0.34], label: "right" },
  ],
  legend: [{ kind: "major", text: "Capital" }, { kind: "city", text: "City, port, or airstrip" }, { kind: "battle", text: "Battle" }, { kind: "route2", text: "Night relief flights (approximate)" }],
  legendAt: "bottom-left", legendWidth: 230,
  checked: ["Encyclopaedia Britannica, \"Nigerian Civil War,\" \"Biafra,\" \"Enugu\" (Biafra's capital, May to October 1967), and \"Port Harcourt\" (refinery, pipelines to Bonny)", "Wikipedia, \"Nigerian Civil War\" (Bonny, Enugu, Port Harcourt, Benin City, and Ore, with dates) and \"Biafran airlift\" (Uli, flights from São Tomé), with Owerri's fall on 6 January 1970 from Encyclopedia.com, \"Biafra,\" and the Uli night flights from Foreign Relations of the United States, 1969 to 1976, vol. E-5, part 1, document 47"],
};

const latam = {
  id: "u8-latin-america",
  caption: "Revolutions, coups, and United States interventions in Latin America, 1954 to 1983",
  alt: "Map of Latin America and the Caribbean marking eight events with their years. Revolutions that brought leftist governments to power: Havana, Cuba, 1959, and Managua, Nicaragua, 1979. Military coups that overthrew elected left-leaning or reformist governments: Guatemala City, 1954; Brasília, Brazil, 1964; and Santiago, Chile, 1973. United States invasions or United States-backed landings: the Bay of Pigs, Cuba, 1961; Santo Domingo, Dominican Republic, 1965; and Grenada, 1983. Six of the eight events are in Central America and the Caribbean.",
  bbox: [-106, -42, -32, 27], width: 560, height: 620,
  regions: [
    { name: "Gulf of Mexico", at: [-94, 22.3], size: 10 }, { name: "Caribbean Sea", at: [-75, 14.6], size: 10 },
    { name: "Pacific Ocean", at: [-92, -10], size: 12 }, { name: "Atlantic Ocean", at: [-40, 4], size: 12 },
  ],
  places: [
    { name: "Havana, 1959", at: [-82.37, 23.11], kind: "major", label: [-7, -6] },
    { name: "Bay of Pigs, 1961", at: [-81.03, 22.07], kind: "battle", label: [-6, 16] },
    { name: "Santo Domingo, 1965", at: [-69.93, 18.49], kind: "battle", label: "above" },
    { name: "Grenada, 1983", at: [-61.75, 12.05], kind: "battle", label: "right" },
    { name: "Guatemala City, 1954", at: [-90.51, 14.63], label: "above" },
    { name: "Managua, 1979", at: [-86.25, 12.13], kind: "major", label: "left" },
    { name: "Brasília, 1964", at: [-47.88, -15.79], label: "right" },
    { name: "Santiago, 1973", at: [-70.67, -33.45], label: "right" },
  ],
  legend: [
    { kind: "major", text: "Revolution brings a leftist government to power" },
    { kind: "city", text: "Coup ousts an elected left-leaning government" },
    { kind: "battle", text: "US invasion or US-backed landing" },
  ],
  legendAt: "bottom-right", legendWidth: 320,
  checked: ["Office of the Historian, U.S. Department of State: Milestones, \"The Bay of Pigs Invasion and its Aftermath\" (Cuban Revolution 1959, landing April 17, 1961) and \"Allende and Chile\" (coup of September 11, 1973), and the UN Peacekeeping background note on the Dominican Republic (U.S. troops landed April 28, 1965)", "Encyclopaedia Britannica: \"Jacobo Árbenz\" (overthrown June 1954), \"Brazil: the military regime\" (coup of March 31 to April 1, 1964, against João Goulart), \"Sandinista\" (took Managua July 1979), and \"U.S. invasion of Grenada\" (October 25, 1983)"],
};

export const maps = [berlin, biafra, latam];

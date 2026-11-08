// Map specs for AP World History, Unit 6 review bank (decks/whap/u6.js and u6x.js), drawn by tools/build-maps.mjs.
// Coordinates are [longitude, latitude]. Every place and date here is a claim the site makes: each map lists the references
// it was checked against.

const exports1900 = {
  id: "u6r-exports",
  caption: "Export economies, c. 1900: some ports and regions and the main export each sent to industrial countries",
  alt: "World map from the Americas to Southeast Asia. Dots mark ports and regions with the main export of each around 1900: Havana, sugar; Santos, in Brazil, coffee; Buenos Aires, beef and wheat; Lagos, in West Africa, palm oil; Alexandria, in Egypt, cotton; Calcutta, in British India, jute; Colombo, in Ceylon, tea; Rangoon, in Burma, rice; and the Kinta valley in Malaya, tin. Larger dots mark the industrial ports of London, Hamburg, and New York, which bought these goods.",
  bbox: [-100, -40, 112, 58], width: 760, height: 430,
  regions: [
    { name: "ARGENTINA", at: [-65, -28], size: 10 }, { name: "BRAZIL", at: [-50, -10], size: 10 },
    { name: "EGYPT", at: [29, 26], size: 10 }, { name: "BRITISH INDIA", at: [78, 21], size: 10 },
    { name: "Atlantic Ocean", at: [-35, 22], size: 10 }, { name: "Indian Ocean", at: [75, -15], size: 10 },
  ],
  places: [
    { name: "London", at: [-0.13, 51.51], kind: "major", label: "left" },
    { name: "Hamburg", at: [9.99, 53.55], kind: "major", label: "right" },
    { name: "New York", at: [-74.0, 40.71], kind: "major", label: "right" },
    { name: "Havana: sugar", at: [-82.37, 23.11], label: "below" },
    { name: "Santos: coffee", at: [-46.33, -23.96], label: "right" },
    { name: "Buenos Aires:\nbeef, wheat", at: [-58.38, -34.6], label: "right" },
    { name: "Lagos: palm oil", at: [3.39, 6.45], label: "below" },
    { name: "Alexandria: cotton", at: [29.92, 31.2], label: [6, -8] },
    { name: "Calcutta: jute", at: [88.36, 22.57], label: "above" },
    { name: "Colombo: tea", at: [79.86, 6.93], label: "left" },
    { name: "Rangoon: rice", at: [96.16, 16.8], label: "right" },
    { name: "Kinta valley,\nMalaya: tin", at: [101.08, 4.6], label: "below" },
  ],
  legend: [{ kind: "major", text: "Industrial port that bought these goods" }, { kind: "city", text: "Exporting port or region: main export" }],
  legendAt: "bottom-right", legendWidth: 290,
  checked: [
    "Encyclopaedia Britannica: \"Argentina: Economic expansion\" (beef and wheat exports from the 1880s), \"Brazil: The coffee economy\" (Santos and São Paulo coffee), \"Cuba: Sugar\", \"Nigeria: Lagos and the palm oil trade\", \"Egypt: Cotton under Muhammad Ali and his successors\", \"jute\" (Bengal), \"Sri Lanka: Tea\", \"Myanmar: Rice in the Irrawaddy delta\", and \"Kinta Valley\" (tin)",
    "Wikipedia: \"Economic history of Argentina\", \"Coffee production in Brazil\", \"Sugar industry of Cuba\", \"Palm oil production in Nigeria\", \"Cotton in Egypt\", \"Jute trade\", \"Tea production in Sri Lanka\", \"Rice production in Myanmar\", and \"Tin mining in Malaysia\"",
  ],
};

const guano = {
  id: "u6r-guano",
  caption: "Guano and nitrates on the Pacific coast of South America, and battles of the War of the Pacific, 1879 to 1884. The italic notes name the country that held each nitrate region before the war; Chile held both after it.",
  alt: "Map of the Pacific coast of South America from Lima in the north to Santiago in the south. The Chincha Islands, off the coast of Peru south of Lima, are marked as the source of guano exported from 1840 to the 1870s. In the Atacama Desert farther south, the nitrate ports of Iquique, in the Tarapacá region, held by Peru before the war, and Antofagasta, held by Bolivia before the war, are marked. Crosses mark battles of the War of the Pacific: the occupation of Antofagasta, 1879; Iquique, 1879; Arica, 1880; and Lima, 1881. Valparaíso and Santiago, in Chile, are marked to the south.",
  bbox: [-80, -35, -64, -10], width: 520, height: 600,
  regions: [
    { name: "PERU", at: [-72.5, -14.5], size: 11 }, { name: "BOLIVIA", at: [-66.5, -19.5], size: 11 },
    { name: "CHILE", at: [-69.6, -29.2], size: 11 }, { name: "ARGENTINA", at: [-66, -27.5], size: 10 },
    { name: "Pacific Ocean", at: [-76.5, -24], size: 11 },
    { name: "ATACAMA DESERT", at: [-67.8, -22.6], size: 10 },
    { name: "Tarapacá: Peru's before 1879", at: [-75.3, -19.8], size: 10 },
    { name: "Antofagasta: Bolivia's before 1879", at: [-75.3, -22.9], size: 10 },
  ],
  places: [
    { name: "Lima 1881", at: [-77.04, -12.05], kind: "battle", label: "right" },
    { name: "Chincha Islands: guano,\n1840 to the 1870s", at: [-76.24, -13.64], kind: "major", label: "left" },
    { name: "Arica 1880", at: [-70.31, -18.48], kind: "battle", label: "right" },
    { name: "Iquique: nitrates;\nbattle 1879", at: [-70.14, -20.21], kind: "major", label: "right" },
    { name: "Antofagasta: nitrates;\noccupied 1879", at: [-70.4, -23.65], kind: "major", label: "right" },
    { name: "Valparaíso", at: [-71.62, -33.05], label: "left" },
    { name: "Santiago", at: [-70.67, -33.45], label: "right" },
  ],
  legend: [{ kind: "major", text: "Guano or nitrate source" }, { kind: "battle", text: "Battle or occupation, with year" }, { kind: "city", text: "City" }],
  legendAt: "top-right", legendWidth: 230,
  checked: [
    "Encyclopaedia Britannica: \"War of the Pacific\" (1879 to 1884, Antofagasta occupied February 1879, Tarapacá ceded by Peru in the Treaty of Ancón, 1883, Bolivia's coast held by Chile under the truce of 1884), \"guano\", and \"Chincha Islands\"",
    "Wikipedia: \"War of the Pacific\" (Antofagasta occupied 14 February 1879, naval battle of Iquique 21 May 1879, Arica taken 7 June 1880, Lima occupied January 1881 after Chorrillos and Miraflores, Treaty of Ancón 20 October 1883, truce with Bolivia 1884) and \"Chincha Islands\" (guano exports from 1840, mostly exhausted by 1874)",
  ],
};

const migration = {
  id: "u6r-migration",
  caption: "Three great streams of long-distance migration, 1846 to 1940, with the estimated number of migrants in each (routes approximate)",
  alt: "World map with three streams of migration, each labeled with an estimated total for 1846 to 1940. Solid lines run from Liverpool and Genoa across the Atlantic to New York and Buenos Aires: from Europe to the Americas, 55 to 58 million. Dashed lines run from Calcutta and Madras in India and from Guangzhou in southern China to Rangoon, Penang, Singapore, Mauritius, and Durban: to Southeast Asia, the Indian Ocean rim, and the South Pacific, 48 to 52 million. Dotted lines run from European Russia east across Siberia to Harbin in Manchuria and from Shandong in northern China north to Harbin: to Manchuria, Siberia, and Central Asia, 46 to 51 million.",
  bbox: [-100, -40, 140, 62], width: 760, height: 430,
  regions: [
    { name: "55 to 58 million", at: [-38, 30], size: 13 },
    { name: "48 to 52 million", at: [80, -6], size: 13 },
    { name: "46 to 51 million", at: [78, 60], size: 13 },
    { name: "SIBERIA", at: [100, 64], size: 10 }, { name: "MANCHURIA", at: [134, 50], size: 10 },
    { name: "AFRICA", at: [20, 5], size: 10 }, { name: "SOUTH AMERICA", at: [-60, -10], size: 10 },
  ],
  routes: [
    { through: [[-3.0, 53.4], [-25, 50], [-50, 44], [-74.0, 40.7]], kind: "route" },
    { through: [[8.93, 44.41], [5, 39], [-5.6, 36.0], [-12, 33], [-19, 24], [-24, 15], [-27, 5], [-32, -8], [-42, -22], [-58.4, -34.6]], kind: "route" },
    { through: [[88.36, 22.57], [90, 18], [96.16, 16.8]], kind: "route2" },
    { through: [[80.27, 13.08], [88, 8], [98, 5.5], [100.33, 5.41]], kind: "route2" },
    { through: [[113.26, 23.13], [114, 20], [110, 10], [103.82, 1.35]], kind: "route2" },
    { through: [[80.27, 13.08], [78, 5], [65, -10], [57.5, -20.2]], kind: "route2" },
    { through: [[57.5, -20.2], [45, -25], [31.03, -29.86]], kind: "route2" },
    { through: [[40, 55.5], [55, 56], [73.37, 54.99], [87, 55], [104.3, 52.3], [118, 50], [126.63, 45.76]], kind: "sea" },
    { through: [[118.0, 36.7], [121.5, 39], [123.43, 41.8], [126.63, 45.76]], kind: "sea" },
  ],
  places: [
    { name: "Liverpool", at: [-3.0, 53.4], label: "above" },
    { name: "Genoa", at: [8.93, 44.41], label: "right" },
    { name: "New York", at: [-74.0, 40.7], kind: "major", label: "left" },
    { name: "Buenos Aires", at: [-58.4, -34.6], kind: "major", label: "left" },
    { name: "Calcutta", at: [88.36, 22.57], label: "left" },
    { name: "Madras", at: [80.27, 13.08], label: "left" },
    { name: "Guangzhou", at: [113.26, 23.13], label: "right" },
    { name: "Rangoon", at: [96.16, 16.8], kind: "major", label: "right" },
    { name: "Penang", at: [100.33, 5.41], kind: "major", label: "left" },
    { name: "Singapore", at: [103.82, 1.35], kind: "major", label: "below" },
    { name: "Mauritius", at: [57.5, -20.2], kind: "major", label: "right" },
    { name: "Durban", at: [31.03, -29.86], kind: "major", label: "left" },
    { name: "Moscow", at: [37.62, 55.75], label: "below" },
    { name: "Shandong", at: [118.0, 36.7], label: "left" },
    { name: "Harbin", at: [126.63, 45.76], kind: "major", label: "right" },
  ],
  legend: [
    { kind: "route", text: "From Europe" },
    { kind: "route2", text: "From India and southern China" },
    { kind: "sea", text: "From Russia and northern China" },
    { kind: "major", text: "Destination" },
  ],
  legendAt: "top-left", legendWidth: 240,
  checked: [
    "Adam McKeown, \"Global Migration, 1846 to 1940,\" Journal of World History 15, no. 2 (2004), pp. 155 to 189 (the three systems and their totals: 55 to 58 million to the Americas, 48 to 52 million from India and southern China to Southeast Asia, the Indian Ocean rim, and the South Pacific, 46 to 51 million from Russia and northeast Asia to Manchuria, Siberia, and Central Asia)",
    "Robert W. Strayer and Eric W. Nelson, Ways of the World, \"Snapshot: Long-Distance Migration in an Age of Empire, 1846 to 1940\" (Bedford/St. Martin's), which gives the same three streams and totals",
  ],
};

const rubber = {
  id: "u6r-rubber",
  caption: "Wild rubber and the move to plantations: where wild rubber was gathered c. 1900, and how rubber seeds were carried from Brazil to Asia, 1876 to 1877 (routes approximate)",
  alt: "Map from South America to Southeast Asia. Dots mark the two main sources of wild rubber around 1900: Manaus, in the Amazon basin of Brazil, and the Congo Free State in central Africa. A dotted line runs from Santarém, on the Amazon, across the Atlantic to Kew Gardens near London, marked 1876, where seeds of the Brazilian rubber tree were sprouted. A dashed line runs from Kew through the Mediterranean, the Suez Canal, and the Indian Ocean to Ceylon, marked 1876, and on to Singapore and Malaya, marked 1877, where British planters later grew rubber on plantations.",
  bbox: [-75, -20, 110, 56], width: 760, height: 400,
  regions: [
    { name: "BRAZIL", at: [-50, -12], size: 10 }, { name: "CONGO FREE STATE", at: [22, -7], size: 10 },
    { name: "Atlantic Ocean", at: [-28, 22], size: 10 }, { name: "Indian Ocean", at: [72, -8], size: 10 },
  ],
  routes: [
    { through: [[-54.7, -2.44], [-48, 0], [-35, 15], [-15, 40], [-6, 48.5], [-3, 49.9], [0.8, 51.1], [-0.3, 51.48]], kind: "sea" },
    { through: [[-0.3, 51.48], [0.8, 51.1], [-3, 49.9], [-6, 48.5], [-10, 43.5], [-9.8, 38], [-5.6, 36.0], [10, 37.5], [32.3, 31.3], [32.5, 29.9], [43.4, 12.6], [60, 12], [79.86, 6.93], [95, 6], [100, 4], [103.82, 1.35]], kind: "route2" },
  ],
  places: [
    { name: "Manaus: wild rubber", at: [-60.02, -3.12], kind: "major", label: [8, -12] },
    { name: "Santarém: seeds\ncollected 1876", at: [-54.7, -2.44], label: "below" },
    { name: "Kew Gardens,\nLondon, 1876", at: [-0.3, 51.48], label: "right" },
    { name: "Congo: wild rubber", at: [18, -2], kind: "major", label: "right" },
    { name: "Ceylon 1876", at: [79.86, 6.93], label: "above" },
    { name: "Singapore and\nMalaya 1877", at: [103.82, 1.35], label: "below" },
  ],
  legend: [{ kind: "major", text: "Main source of wild rubber, c. 1900" }, { kind: "sea", text: "Seeds from Brazil to Kew" }, { kind: "route2", text: "Seedlings from Kew to Asia" }],
  legendAt: "bottom-left", legendWidth: 270,
  checked: [
    "Wikipedia, \"Henry Wickham (explorer)\" (about 70,000 seeds gathered near Santarém in 1876, sprouted at Kew, seedlings sent to Ceylon, Malaya, and Singapore) and \"Congo Free State\" (wild rubber quotas)",
    "\"Henry Wickham,\" British Empire (britishempire.co.uk), on the seeds shipped from Santarém in 1876, sprouted at Kew, and the 1,900 seedlings sent to Peradeniya in Ceylon and then to Singapore and Malaya, and Encyclopaedia Britannica, \"Manaus\" (the wild rubber boom)",
  ],
};

export const maps = [exports1900, guano, migration, rubber];

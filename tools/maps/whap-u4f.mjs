// Map specs for AP World History Unit 4 topic quizzes (t44, t46), drawn by tools/build-maps.mjs.
// Coordinates are [longitude, latitude]. Every place, date, and route here is a claim the site makes: each map lists the
// references it was checked against. Routes are drawn as approximate lines between places, and the captions say so.

const pueblo = {
  id: "u4f-pueblo",
  caption: "The Pueblo Revolt in Spanish New Mexico, August 1680 (route approximate)",
  alt: "Map of New Mexico and the lands to its west and south. Santa Fe, the Spanish capital, is marked as besieged by Pueblo forces from August 13 to 21, 1680. North of it is Taos, where Popé planned the revolt, and San Juan, Popé's home pueblo. Far to the west are the Zuni pueblos and, farther still, the Hopi villages, where churches were burned and the friars killed. South of Santa Fe is Isleta, the one pueblo that did not join the revolt, where Spanish settlers from the south gathered. A dashed line marks the Spanish retreat from Santa Fe south past Isleta to Socorro, where the two groups of refugees met in September, and on to El Paso del Norte, where the Spanish stayed from 1680 until they returned in 1692. An arrow continues south toward Mexico City along the Camino Real. Apache peoples lived to the east and south and Navajo peoples to the northwest.",
  bbox: [-112, 30.6, -103, 38], width: 640, height: 560,
  regions: [
    { name: "NEW MEXICO", at: [-104.4, 36.9], size: 12 },
    { name: "Navajo", at: [-109.2, 36.7], size: 11 },
    { name: "Apache", at: [-104.4, 33.4], size: 11 },
    { name: "Apache", at: [-109.4, 32.6], size: 11 },
  ],
  routes: [
    // the Spanish retreat, August and September 1680: Santa Fe south along the Rio Grande to El Paso del Norte
    { kind: "route2", through: [[-105.94, 35.69], [-106.3, 35.4], [-106.6, 35.1], [-106.69, 34.91], [-106.8, 34.5], [-106.89, 34.06], [-107.0, 33.5], [-107.1, 33.0], [-106.9, 32.4], [-106.49, 31.74]] },
    // the Camino Real onward toward Mexico City, off the map to the south
    { kind: "route", through: [[-106.49, 31.74], [-106.3, 31.3], [-106.1, 30.6]] },
  ],
  places: [
    { name: "Taos: Popé plans the revolt", at: [-105.55, 36.44], label: "right" },
    { name: "San Juan: Popé's home", at: [-106.07, 36.05], label: "left" },
    { name: "Santa Fe: Spanish capital,\nbesieged Aug. 13 to 21, 1680", at: [-105.94, 35.69], kind: "major", label: [8, 6] },
    { name: "Isleta: did not join;\nSpanish settlers gather", at: [-106.69, 34.91], label: [8, 4] },
    { name: "Socorro: refugees meet, Sept. 1680", at: [-106.89, 34.06], label: "left" },
    { name: "El Paso del Norte: Spanish\nin exile, 1680 to 1692", at: [-106.49, 31.74], kind: "major", label: "right" },
    { name: "Zuni pueblos", at: [-108.85, 35.07], label: "below" },
    { name: "Hopi villages: churches\nburned, friars killed", at: [-110.64, 35.87], label: "below" },
  ],
  legend: [
    { kind: "route2", text: "Spanish retreat, Aug. to Sept. 1680" },
    { kind: "route", text: "Camino Real toward Mexico City" },
    { kind: "major", text: "Spanish capital or base" },
    { kind: "city", text: "Pueblo town" },
  ],
  legendAt: "bottom-left", legendWidth: 260,
  checked: ["Encyclopaedia Britannica, \"Pueblo Rebellion\" (August 10 and 21, 1680, about 400 dead including 21 priests, Spanish return in 1692)", "Wikipedia, \"Pueblo Revolt\" (Taos, San Juan, the siege of Santa Fe from August 13 to 21, Isleta, Socorro, El Paso, the Hopi and Zuni), and Richard Flint and Shirley Cushing Flint, biographical sketch of Antonio de Otermín, New Mexico Office of the State Historian (the siege, Isleta, El Paso as the capital in exile)"],
};

const philippines = {
  id: "u4f-philippines",
  caption: "Spanish rule and trade in the Philippines, 1565 to c. 1650 (routes approximate)",
  alt: "Map of the Philippine Islands and the South China Sea, with the coast of Fujian in China at the top left and the northern tip of Borneo at the bottom left. Cebu, in the central islands, is marked as the first Spanish settlement, 1565. Manila, on Luzon, is marked as the Spanish capital from 1571, with the Chinese quarter called the Parián outside its walls. A solid line marks the route of Chinese junks from Yuegang in Fujian, opened to private overseas trade in 1567, south across the sea to Manila, carrying silk and porcelain. A dashed line marks the galleon route from Manila east through the islands into the Pacific toward Acapulco in New Spain, which brought back silver. In the south, Jolo is marked as the seat of the Sultanate of Sulu and Cotabato as the seat of the Sultanate of Maguindanao, Muslim states that largely governed themselves.",
  bbox: [112, 4, 130, 26], width: 580, height: 680,
  regions: [
    { name: "CHINA", at: [114.5, 24.8], size: 12 },
    { name: "South China Sea", at: [116, 18.5], size: 11 },
    { name: "PACIFIC OCEAN", at: [127.2, 20], size: 11 },
    { name: "Luzon", at: [121.6, 16.6], size: 11 },
    { name: "Mindanao", at: [125.2, 8.1], size: 11 },
    { name: "BORNEO", at: [116, 5.4], size: 10 },
  ],
  routes: [
    // Chinese junks: Yuegang (Haicheng) down the Taiwan Strait and across to Manila
    { kind: "route", through: [[117.9, 24.45], [118.6, 23.0], [119.4, 20.5], [119.9, 17.5], [120.2, 15.5], [120.98, 14.6]] },
    // galleons: Manila out through the San Bernardino Strait into the Pacific, toward Acapulco
    { kind: "route2", through: [[120.98, 14.6], [120.6, 14.3], [121.6, 13.6], [122.8, 13.0], [124.3, 12.55], [126.5, 14], [128.5, 17], [129.8, 19.5]] },
  ],
  places: [
    { name: "Yuegang (Fujian): opened\nto private trade, 1567", at: [117.9, 24.45], label: "left" },
    { name: "Manila: Spanish capital, 1571;\nChinese quarter (Parián)\noutside the walls", at: [120.98, 14.6], kind: "major", label: "left" },
    { name: "Cebu: first Spanish\nsettlement, 1565", at: [123.89, 10.3], kind: "major", label: "left" },
    { name: "Jolo: Sultanate\nof Sulu", at: [121.0, 6.05], label: "left" },
    { name: "Cotabato: Sultanate\nof Maguindanao", at: [124.25, 7.22], label: "below" },
  ],
  legend: [
    { kind: "route", text: "Chinese junks to Manila: silk, porcelain" },
    { kind: "route2", text: "Galleons to and from Acapulco: silver" },
    { kind: "major", text: "Spanish town" },
    { kind: "city", text: "Seat of a Muslim sultanate" },
  ],
  legendAt: "top-right", legendWidth: 270,
  checked: ["Wikipedia, \"Spanish East Indies\" (Legazpi at Cebu, 1565; Manila taken and made the capital; Sulu and Maguindanao largely governing themselves; the galleons to Acapulco) and \"Sangley Rebellion (1603)\" (the Parián outside the walls, about 2,000 Spaniards and 10,000 Chinese residents c. 1586)", "Wikipedia, \"Haijin\" (the Ming sea ban lifted in 1567; Yuegang merchants trading with Manila within a year of its conquest), and Encyclopaedia Britannica, \"Manila galleon\""],
};

export const maps = [pueblo, philippines];

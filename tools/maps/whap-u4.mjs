// Map specs for AP World History Unit 4 topic quizzes and unit assessment (drawn by tools/build-maps.mjs).
// Coordinates are [longitude, latitude]. Every place, date, and route here is a claim the site makes: each map lists the
// references it was checked against. Routes are drawn as approximate lines between places, and the captions say so.

const galleons = {
  id: "u4-galleons",
  caption: "The Manila galleon routes across the Pacific, 1565 to 1815 (routes approximate)",
  alt: "Map of the Pacific Ocean from China and the Philippines to New Spain (Mexico). A solid line marks the westward route: galleons left Acapulco, sailed southwest to about 13 degrees north, and crossed the Pacific in the belt labeled trade winds blow west, stopping at Guam in the Marianas before reaching Manila, about 3 months in all, carrying silver. A dashed line marks the eastward route: galleons left Manila, sailed northeast past Japan along the Kuroshio Current to about 40 degrees north, crossed the Pacific in the belt labeled westerlies blow east, reached the coast of California, and sailed south along the coast to Acapulco, about 6 months in all, carrying silk and porcelain. The two routes are far apart: the westward route runs well south of the eastward one.",
  bbox: [115, 2, 265, 46], width: 760, height: 360,
  regions: [
    { name: "PACIFIC OCEAN", at: [-170, 27], size: 13 },
    { name: "Trade winds blow west", at: [-152, 17.5], size: 12 },
    { name: "Westerlies blow east", at: [-178, 45], size: 12 },
    { name: "Kuroshio Current", at: [150, 32], size: 10 },
    { name: "CHINA", at: [116.5, 31], size: 10 },
    { name: "JAPAN", at: [138, 39.6], size: 10 },
    { name: "NEW SPAIN", at: [-103.5, 24], size: 10 },
    { name: "California coast", at: [-114.5, 36], size: 10 },
  ],
  routes: [
    // westward, solid: Acapulco southwest to the trade-wind belt, across at about 13 degrees north to Guam, then to Manila
    { kind: "route", through: [[-99.89, 16.86], [-106, 15.5], [-120, 13.5], [-140, 13], [-160, 13], [180, 13.2], [160, 13.4], [144.75, 13.45], [135, 13.2], [126.5, 12.8], [124.3, 12.55], [122.8, 13.0], [121.6, 13.6], [120.6, 14.3], [120.98, 14.6]] },
    // eastward, dashed: Manila out through the islands, northeast past Japan to about 40 degrees north, across, then south along California
    { kind: "route2", through: [[120.98, 14.6], [120.6, 14.3], [121.6, 13.6], [122.8, 13.0], [124.3, 12.55], [126.5, 14], [130, 20], [135, 27], [141, 33], [148, 37.5], [160, 40], [180, 40.5], [-160, 40.5], [-140, 40.2], [-126, 40.2], [-123.5, 37.5], [-120.5, 34.2], [-117, 32.2], [-114.5, 27.5], [-111, 23.5], [-106, 20.2], [-102, 17.8], [-99.89, 16.86]] },
  ],
  places: [
    { name: "Manila", at: [120.98, 14.6], kind: "major", label: "left" },
    { name: "Guam (Marianas)", at: [144.75, 13.45], label: "below" },
    { name: "Acapulco", at: [-99.89, 16.86], kind: "major", label: "below" },
  ],
  legend: [
    { kind: "route", text: "Westward, Acapulco to Manila: silver; about 3 months" },
    { kind: "route2", text: "Eastward, Manila to Acapulco: silk, porcelain; about 6 months" },
    { kind: "major", text: "Spanish port at each end of the route" },
  ],
  legendAt: "bottom-left", legendWidth: 400,
  checked: ["Encyclopaedia Britannica, \"Manila galleon\" (the annual voyage, 1565 to 1815, and its cargoes)", "Guampedia (University of Guam), \"Navigation and Cargo of the Manila Galleons\" (the latitudes, winds, Kuroshio Current, Marianas stop, landfall in California, and voyage times)"],
};

const voyages = {
  id: "u4-iberian-voyages",
  caption: "Three voyages from Portugal and Castile, 1487 to 1498 (routes approximate)",
  alt: "Map of the Atlantic and Indian Oceans from the Caribbean to India. A dashed line marks the voyage of Bartolomeu Dias for Portugal, 1487 to 1488: from Lisbon south along the coast of Africa and around its southern tip to Kwaaihoek, where he turned back in 1488. A dotted line marks the voyage of Christopher Columbus for Castile, 1492: from Palos to the Canary Islands, then west across the Atlantic to San Salvador in the Bahamas, reached October 12, 1492, and on to Hispaniola. A solid line marks the voyage of Vasco da Gama for Portugal, 1497 to 1498: from Lisbon to the Cape Verde Islands, then in a wide arc through the open South Atlantic, out of sight of land for about three months, to Saint Helena Bay, around the Cape of Good Hope, north along the east coast of Africa to Mozambique Island and Malindi, where a pilot who knew the route to India joined the fleet, and across the Arabian Sea to Calicut, reached May 1498.",
  bbox: [-90, -38, 88, 44], width: 800, height: 470,
  regions: [
    { name: "Atlantic Ocean", at: [-45, 2], size: 13 }, { name: "Indian Ocean", at: [68, -24], size: 13 },
    { name: "AFRICA", at: [20, 8], size: 11 }, { name: "EUROPE", at: [8, 43.5], size: 10 }, { name: "INDIA", at: [78.5, 21], size: 10 },
    { name: "Arabian Sea", at: [63, 14], size: 10 }, { name: "SOUTH AMERICA", at: [-60, -8], size: 10 },
  ],
  routes: [
    // Dias, 1487 to 1488: down the African coast, around the Cape, to Kwaaihoek
    { kind: "route2", through: [[-9.14, 38.72], [-11, 34], [-14.5, 27.5], [-18.5, 21], [-19, 14.7], [-17, 9.5], [-13, 5.5], [-6, 3.2], [1, 3.6], [6, 2], [7.8, -1], [10.3, -6], [11.4, -12], [10.4, -18], [12.4, -24], [14.6, -29.5], [17.5, -35.5], [20.5, -35.6], [22.14, -34.3], [26.0, -34.1], [26.6, -33.75]] },
    // Columbus, 1492: Palos, La Gomera, west to San Salvador, Cuba, Hispaniola
    { kind: "sea", through: [[-6.89, 37.23], [-10, 34], [-15, 29.5], [-17.11, 28.09], [-30, 27.3], [-45, 26.5], [-60, 25.5], [-74.5, 24.05], [-75.7, 21.2], [-73.5, 20.2], [-72.1, 19.75]] },
    // da Gama, 1497 to 1498: Lisbon, Cape Verde, the wide arc, St Helena Bay, the Cape, up East Africa, across to Calicut
    { kind: "route", through: [[-9.14, 38.72], [-13, 32], [-18.5, 25], [-23.5, 15.0], [-26, 6], [-29, -6], [-30, -18], [-25, -28], [-12, -33.5], [3, -33.5], [17.9, -32.7], [18.2, -34.9], [22.14, -34.6], [28, -33.4], [33, -29], [35.8, -24], [36.5, -19.5], [40.74, -15.03], [41.2, -10], [40.3, -5.5], [40.12, -3.22], [47, 1], [57, 6], [68, 10], [75.78, 11.25]] },
  ],
  places: [
    { name: "Lisbon (Portugal)", at: [-9.14, 38.72], kind: "major", label: "left" },
    { name: "Palos (Castile)", at: [-6.89, 37.23], kind: "major", label: [6, 14] },
    { name: "Canary Islands (Castile)", at: [-17.11, 28.09], label: [-6, 16] },
    { name: "Cape Verde Islands (Portugal)", at: [-23.6, 15.0], label: "left" },
    { name: "San Salvador, Oct. 1492", at: [-74.5, 24.05], label: "above" },
    { name: "Hispaniola, Dec. 1492", at: [-72.1, 19.75], label: "below" },
    { name: "Cape of Good Hope", at: [18.47, -34.36], label: "below" },
    { name: "Kwaaihoek: Dias turns back, 1488", at: [26.6, -33.75], label: "right" },
    { name: "Mozambique Island", at: [40.74, -15.03], label: "right" },
    { name: "Malindi: a pilot joins, Apr. 1498", at: [40.12, -3.22], label: "left" },
    { name: "Calicut, May 1498", at: [75.78, 11.25], kind: "major", label: "below" },
  ],
  legend: [
    { kind: "route2", text: "Dias for Portugal, 1487 to 1488" },
    { kind: "sea", text: "Columbus for Castile, 1492" },
    { kind: "route", text: "Da Gama for Portugal, 1497 to 1498" },
  ],
  legendAt: "bottom-left", legendWidth: 250,
  checked: ["Encyclopaedia Britannica, \"Vasco da Gama\", \"Bartolomeu Dias\", and \"Christopher Columbus: The first voyage\"", "World History Encyclopedia, \"Vasco da Gama\" (the three months out of sight of land, Saint Helena Bay, Malindi), and South African History Online, \"Bartolomeu Dias\" (Mossel Bay and Kwaaihoek, 1488)"],
};

const japan = {
  id: "u4-japan-gates",
  caption: "Japan's four gates for foreign trade and relations under the Tokugawa shoguns, after 1641",
  alt: "Map of Japan, Korea, and the islands to the south. Edo, the shogun's capital, is marked in central Japan. Four places on the edges of Japan are marked as the only gates for foreign trade and relations. Nagasaki, in the far southwest: Dutch merchants confined to the island of Dejima from 1641, and Chinese ships. Tsushima, an island between Japan and Korea, whose Sō clan handled trade and embassies with Korea through a compound at Busan. Satsuma, at the southern tip of Kyushu, whose Shimazu clan handled relations with the Ryukyu Kingdom, which Satsuma invaded in 1609; the Ryukyu capital, Shuri, is marked far to the south. Matsumae, at the southern tip of the northern island of Ezo, whose clan handled trade with the Ainu.",
  bbox: [123, 24.5, 146, 45], width: 560, height: 560,
  regions: [
    { name: "KOREA", at: [127.6, 37.3], size: 11 }, { name: "EZO (Ainu lands)", at: [143.0, 43.9], size: 10 },
    { name: "Sea of Japan", at: [134.5, 40.5], size: 11 }, { name: "Pacific Ocean", at: [141.5, 30], size: 12 },
    { name: "East China Sea", at: [125.5, 30.5], size: 11 }, { name: "RYUKYU ISLANDS", at: [130.6, 27.6], size: 9 },
  ],
  places: [
    { name: "Edo (shogun's capital)", at: [139.69, 35.69], kind: "major", label: "right" },
    { name: "Nagasaki: Dutch at Dejima\nfrom 1641; Chinese ships", at: [129.87, 32.74], label: [-8, 8] },
    { name: "Tsushima (Sō clan):\nKorea", at: [129.29, 34.2], label: [8, -10] },
    { name: "Busan", at: [129.04, 35.1], label: "left" },
    { name: "Satsuma (Shimazu clan):\nRyukyu, invaded 1609", at: [130.56, 31.6], label: [10, 8] },
    { name: "Shuri (Ryukyu Kingdom)", at: [127.72, 26.22], label: "right" },
    { name: "Matsumae (Matsumae clan):\nthe Ainu", at: [140.11, 41.43], label: "left" },
  ],
  legend: [{ kind: "major", text: "Shogun's capital" }, { kind: "city", text: "Gate for foreign contact, or a port it dealt with" }],
  legendAt: "top-left", legendWidth: 330,
  checked: ["Arano Yasunori, \"Foreign Relations in Early Modern Japan: Exploding the Myth of National Seclusion,\" Nippon.com (2013), and Encyclopaedia Britannica, \"sakoku\"", "Renata Cabral Bernabé, \"The Chinese in Nagasaki and Japanese Systems of Trade Control,\" CAPASIA (2025)"],
};

export const maps = [galleons, voyages, japan];

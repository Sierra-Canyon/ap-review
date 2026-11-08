// Map specs for the AP World History Unit 4 review bank (decks/whap/u4.js and u4x.js), drawn by tools/build-maps.mjs.
// Coordinates are [longitude, latitude]. Every place, date, and route here is a claim the site makes: each map lists the
// references it was checked against. Routes are drawn as approximate lines between places, and the captions say so.

const guns = {
  id: "u4r-asian-guns",
  caption: "Gunpowder weapons at sea and in East Asia, 1509 to 1592 (routes approximate)",
  alt: "Map of the Indian Ocean and East Asia from Egypt to Japan. At Diu, off western India, an X marks a battle in 1509 in which a Portuguese fleet defeated a combined fleet of Gujarat, Mamluk Egypt, and Calicut. Goa (Portuguese from 1510) and Malacca (Portuguese from 1511) are marked as Portuguese ports. A solid line shows an Ottoman fleet sailing in 1538 from Suez down the Red Sea, taking Aden, and crossing to Diu, where its siege failed. A dashed line shows Ottoman ships carrying cannons and gunners from the Red Sea to the sultanate of Aceh in Sumatra in the 1560s. A dotted line shows the Portuguese sea route from Malacca past China to Japan. Tanegashima, an island in southern Japan, is labeled as the place where Portuguese guns arrived in 1543. An X at Nagashino in central Japan marks a battle won with massed musket fire in 1575. An X off the southern coast of Korea marks Hansan Island, where the Korean admiral Yi Sun-sin's cannon-armed fleet defeated a Japanese fleet in 1592.",
  bbox: [30, -4, 142, 42], width: 820, height: 440,
  regions: [
    { name: "INDIAN OCEAN", at: [78, 2], size: 13 }, { name: "Arabian Sea", at: [63, 13], size: 11 }, { name: "Red Sea", at: [38.6, 20.5], size: 10 },
    { name: "Bay of Bengal", at: [89, 15], size: 10 }, { name: "South China Sea", at: [113, 12], size: 10 },
    { name: "CHINA", at: [110, 27], size: 12 }, { name: "INDIA", at: [78, 23], size: 11 },
    { name: "OTTOMAN EGYPT", at: [30.8, 26], size: 10 }, { name: "SUMATRA", at: [101.5, -1.6], size: 9 },
  ],
  routes: [
    { kind: "route", through: [[32.55, 29.97], [34, 27.5], [36.5, 23.5], [39.5, 18.5], [42.2, 14.5], [43.4, 12.6], [45.03, 12.6], [52, 14], [60, 17], [66, 19.5], [70.98, 20.6]] },
    { kind: "route2", through: [[43.4, 12.4], [46, 12], [55, 11], [65, 9.5], [75, 7.5], [82, 6.2], [90, 5.9], [95.32, 5.7]] },
    { kind: "sea", through: [[102.25, 2.2], [104.3, 1.3], [106, 4], [109, 9], [111.5, 15], [113.6, 21.2], [117, 23.5], [121, 26], [126, 28.5], [130.98, 30.4]] },
  ],
  places: [
    { name: "Suez", at: [32.55, 29.97], label: "right" },
    { name: "Aden: taken by the\nOttomans, 1538", at: [45.03, 12.8], label: [6, -16] },
    { name: "Diu: Portuguese victory, 1509;\nOttoman siege fails, 1538", at: [70.98, 20.71], kind: "battle", label: [-8, -22] },
    { name: "Goa (Portuguese, 1510)", at: [73.83, 15.5], kind: "major", label: "right" },
    { name: "Malacca (Portuguese, 1511)", at: [102.25, 2.2], kind: "major", label: [8, 14] },
    { name: "Aceh: Ottoman cannons\nand gunners, 1560s", at: [95.32, 5.55], label: [-8, -14] },
    { name: "Tanegashima: Portuguese\nguns arrive, 1543", at: [130.98, 30.6], label: [-8, 14] },
    { name: "Nagashino:\nmassed musket fire, 1575", at: [137.56, 34.92], kind: "battle", label: [-12, -22] },
    { name: "Hansan Island, Korea: Korean\ncannon ships win, 1592", at: [128.48, 34.77], kind: "battle", label: [-8, -6] },
  ],
  legend: [
    { kind: "route", text: "Ottoman fleet from Suez, 1538" },
    { kind: "route2", text: "Ottoman guns and gunners to Aceh, 1560s" },
    { kind: "sea", text: "Portuguese sea route to China and Japan" },
    { kind: "major", text: "Portuguese port" },
    { kind: "battle", text: "Battle" },
  ],
  legendAt: "bottom-left", legendWidth: 310,
  checked: ["Encyclopaedia Britannica, \"Yi Sun-shin\" and \"How did Oda Nobunaga make use of firearms?\" (guns reach Japan with the Portuguese in 1543; Nagashino, 1575)", "Wikipedia, \"Siege of Diu (1538)\" (the 1509 battle, the Suez fleet, Aden) and \"Ottoman expeditions to Aceh\" (soldiers, gunsmiths, and gunners sent from 1566), which cite C. R. Boxer and the Cambridge History of Southeast Asia"],
};

const north = {
  id: "u4r-north-routes",
  caption: "English, French, and Dutch voyages in search of a northern route to Asia, 1497 to 1611, and the colonies founded after them (routes approximate)",
  alt: "Map of the North Atlantic from Europe to North America. A dashed line shows John Cabot sailing for England from Bristol in 1497 to Newfoundland; the exact landfall is debated. A dotted line shows Jacques Cartier sailing for France from Saint-Malo in 1535, through the Strait of Belle Isle into the Gulf of St. Lawrence, and up the St. Lawrence River to Stadacona and Hochelaga, where he turned back. Solid lines show two voyages of Henry Hudson: in 1609, for the Dutch East India Company, from Amsterdam across the Atlantic and up the river later named for him to near present-day Albany, where he turned back; and in 1610, for English merchants, from London past Iceland and Greenland through Hudson Strait into Hudson Bay and south to James Bay, where his crew set him adrift in 1611. Three colonies are marked: Jamestown (English), 1607; Quebec (French), 1608, at Stadacona; and New Amsterdam (Dutch), c. 1625, at the mouth of the Hudson River. The Grand Banks fishing grounds lie off Newfoundland.",
  bbox: [-92, 35, 8, 66], width: 780, height: 500,
  regions: [
    { name: "ATLANTIC OCEAN", at: [-28, 39], size: 13 }, { name: "Hudson Bay", at: [-86, 58.5], size: 11 }, { name: "GREENLAND", at: [-43, 64.5], size: 10 },
    { name: "Grand Banks: cod fishing", at: [-47, 42.6], size: 10 }, { name: "EUROPE", at: [2, 47], size: 10 }, { name: "NORTH AMERICA", at: [-86, 44.5], size: 11 },
  ],
  routes: [
    { kind: "route2", through: [[-2.6, 51.45], [-6, 51.4], [-12, 52.2], [-25, 52.5], [-40, 52], [-52, 51.8], [-55.6, 51.5]] },
    { kind: "sea", through: [[-2.0, 48.65], [-8, 49], [-20, 50], [-35, 51], [-50, 51.4], [-55.4, 51.6], [-57.2, 51.2], [-59.5, 50.0], [-63, 49.6], [-66.5, 49.2], [-69, 48.3], [-71.2, 46.8], [-72.6, 46.1], [-73.55, 45.5]] },
    { kind: "route", through: [[4.9, 52.37], [3.5, 55], [1.5, 59], [-0.5, 60.9], [-6, 60.2], [-15, 56], [-30, 50], [-45, 46], [-58, 44], [-66, 43.5], [-70, 41.3], [-73.9, 40.5], [-73.95, 41.5], [-73.75, 42.65]] },
    { kind: "route", through: [[-0.1, 51.5], [1.6, 51.6], [2.2, 53.5], [1, 57], [-0.3, 61.2], [-8, 62.5], [-16, 63], [-22, 63.1], [-33, 61.5], [-44, 59.2], [-55, 60.6], [-64.7, 61.2], [-70, 62.3], [-75, 62.6], [-78, 62.2], [-79, 60], [-78.6, 57], [-79.5, 54], [-80.5, 51.6]] },
  ],
  places: [
    { name: "Bristol", at: [-2.6, 51.45], label: [6, 13] },
    { name: "Saint-Malo", at: [-2.0, 48.65], label: "below" },
    { name: "London", at: [-0.1, 51.5], label: [6, -6] },
    { name: "Amsterdam", at: [4.9, 52.37], label: "right" },
    { name: "Newfoundland, 1497\n(Cabot's landfall debated)", at: [-55.6, 51.5], label: [10, -20] },
    { name: "Hochelaga, 1535:\nCartier turns back", at: [-73.55, 45.5], label: [-8, 6] },
    { name: "Stadacona; Quebec\n(French) founded 1608", at: [-71.2, 46.8], kind: "major", label: [-8, -16] },
    { name: "Hudson turns back, 1609", at: [-73.75, 42.65], label: [8, -2] },
    { name: "New Amsterdam (Dutch), c. 1625", at: [-74.01, 40.7], kind: "major", label: [8, 10] },
    { name: "Jamestown (English), 1607", at: [-76.78, 37.21], kind: "major", label: "right" },
    { name: "James Bay: Hudson\nset adrift, 1611", at: [-80.5, 51.6], label: [-8, -4] },
  ],
  legend: [
    { kind: "route2", text: "Cabot for England, 1497" },
    { kind: "sea", text: "Cartier for France, 1535" },
    { kind: "route", text: "Hudson: 1609 for the Dutch East India Company;" },
    { kind: "route", text: "1610 to 1611 for English merchants" },
    { kind: "major", text: "Colony founded in the 1600s" },
  ],
  legendAt: "bottom-right", legendWidth: 330,
  checked: ["Encyclopaedia Britannica, \"Henry Hudson\" (both voyages, their sponsors, the river to near Albany, James Bay, 1611)", "The Canadian Encyclopedia, \"Jacques Cartier\" (the voyages of 1534 to 1542, the Strait of Belle Isle, Stadacona, Hochelaga), and Newfoundland and Labrador Heritage, \"John Cabot's Voyage of 1497\" (Bristol, June 1497, the debated landfall)"],
};

const crops = {
  id: "u4r-american-crops",
  caption: "American food crops and tobacco reach Africa and Asia, 1500s and 1600s (routes approximate)",
  alt: "Map from Brazil across the Atlantic to Africa and on to Asia. A solid line runs from Salvador in Portuguese Brazil across the South Atlantic to Luanda in West Central Africa, labeled: cassava carried from Brazil by Portuguese traders, 1500s, and becomes a staple in Kongo and Angola. West Africa is labeled: maize spreads, 1500s. Istanbul is labeled: Sultan Murad IV bans tobacco, 1630s. A dashed line runs from Spanish Manila, where American crops arrived on the galleons from Mexico, to Fuzhou in Fujian province, China, labeled: sweet potatoes brought from Manila in the 1590s and promoted by officials after a famine.",
  bbox: [-62, -20, 128, 46], width: 820, height: 420,
  regions: [
    { name: "ATLANTIC OCEAN", at: [-18, -6], size: 12 }, { name: "INDIAN OCEAN", at: [75, -6], size: 12 },
    { name: "BRAZIL (Portuguese)", at: [-52, -6], size: 10 }, { name: "WEST AFRICA: maize spreads, 1500s", at: [-2, 14.5], size: 10 },
    { name: "KONGO AND ANGOLA:", at: [24, -1.5], size: 10 }, { name: "cassava becomes a staple", at: [24, -4.5], size: 10 },
    { name: "CHINA", at: [98, 37], size: 12 }, { name: "OTTOMAN EMPIRE", at: [38, 36.5], size: 10 },
  ],
  routes: [
    { kind: "route", through: [[-38.5, -12.97], [-30, -12], [-15, -10.5], [0, -9.5], [13.23, -8.84]] },
    { kind: "route2", through: [[120.98, 14.6], [120.3, 17], [120.3, 20], [119.8, 23], [119.3, 26.07]] },
  ],
  places: [
    { name: "Salvador (Bahia)", at: [-38.5, -12.97], kind: "major", label: [-8, 14] },
    { name: "Luanda (Portuguese, 1576)", at: [13.23, -8.84], label: [8, 12] },
    { name: "Istanbul: Sultan Murad IV\nbans tobacco, 1630s", at: [28.97, 41.01], label: [-8, -14] },
    { name: "Manila (Spanish): American crops\narrive on galleons from Mexico", at: [120.98, 14.6], kind: "major", label: [-8, 12] },
    { name: "Fuzhou (Fujian): sweet potatoes\nfrom Manila, 1590s", at: [119.3, 26.07], label: [-8, -14] },
  ],
  legend: [
    { kind: "route", text: "Cassava, Brazil to Africa, 1500s" },
    { kind: "route2", text: "Sweet potatoes, Manila to China, 1590s" },
    { kind: "major", text: "Colonial port (Portuguese or Spanish)" },
  ],
  legendAt: "bottom-right", legendWidth: 270,
  checked: ["Food and Agriculture Organization of the United Nations, \"The world cassava economy,\" chapter 1 (cassava brought to Africa by Portuguese traders from Brazil in the 1500s), and Encyclopaedia Britannica, \"Murad IV\" (his ban on tobacco)", "Wikipedia, \"Wanli era\" (sweet potatoes brought from the Philippines to Fujian by the 1590s and promoted by the governor after the famine of 1594), and Miguel Ángel Gómez Mendoza and others, \"'Wheat of Portugal': The African adventure of maize,\" Culture & History Digital Journal (maize carried to Africa by the Portuguese in the 1500s)"],
};

const labor = {
  id: "u4r-labor-americas",
  caption: "Who did the forced labor: mines, plantations, and a maroon community in the Americas, c. 1570 to c. 1700",
  alt: "Map of South America, the Caribbean, and the Atlantic coast of North America. Circles mark places where Indigenous people were forced to work: Potosí, silver mines, where Indigenous men were drafted under the mita from the 1570s; and Huancavelica, a mercury mine also worked under the mita. Larger circles mark places where enslaved Africans did most of the work: Pernambuco and Bahia in Portuguese Brazil, sugar mills; Barbados, sugar from the 1640s, where enslaved Africans replaced servants from the British Isles; and Virginia, around Jamestown, tobacco, where enslaved Africans replaced indentured servants by about 1700. An X marks Palmares, in the hills inland from Pernambuco, a community of people who escaped slavery, about 1605 to 1694.",
  bbox: [-100, -34, -30, 40], width: 620, height: 680,
  regions: [
    { name: "ATLANTIC OCEAN", at: [-45, 20], size: 12 }, { name: "PACIFIC OCEAN", at: [-92, -8], size: 12 },
    { name: "Caribbean Sea", at: [-75, 15], size: 10 }, { name: "PORTUGUESE BRAZIL", at: [-52, -18], size: 10 },
    { name: "SPANISH PERU", at: [-70, -6], size: 10 }, { name: "NEW SPAIN", at: [-94, 19.5], size: 10 },
  ],
  places: [
    { name: "Potosí: silver mines;\nIndigenous men drafted\nunder the mita, 1570s on", at: [-65.75, -19.58], label: [8, 2] },
    { name: "Huancavelica: mercury\nmine; mita draft", at: [-74.97, -12.79], label: [-8, 2] },
    { name: "Pernambuco: sugar mills", at: [-34.9, -8.05], kind: "major", label: [-6, -10] },
    { name: "Bahia: sugar mills", at: [-38.5, -12.97], kind: "major", label: "left" },
    { name: "Palmares, c. 1605 to 1694", at: [-36.08, -9.17], kind: "battle", label: [-9, 6] },
    { name: "Barbados: sugar from the 1640s;\nenslaved Africans replace servants\nfrom the British Isles", at: [-59.6, 13.1], kind: "major", label: [8, -6] },
    { name: "Virginia (Jamestown): tobacco;\nenslaved Africans replace\nindentured servants by c. 1700", at: [-76.78, 37.21], kind: "major", label: [8, -4] },
  ],
  legend: [
    { kind: "city", text: "Indigenous people forced to work (mita)" },
    { kind: "major", text: "Most work done by enslaved Africans" },
    { kind: "battle", text: "Community of people who escaped slavery" },
  ],
  legendAt: "bottom-left", legendWidth: 290,
  checked: ["Encyclopedia of Latin American History and Culture, \"Mita\" (encyclopedia.com: Toledo's mita for Potosí, 1572 to 1575, and for Huancavelica), and Wikipedia, \"Palmares (quilombo)\" (founded 1605, Serra da Barriga in present-day Alagoas, destroyed 1694)", "King's College London Archives, \"The introduction of sugar cane\" (Barbados: sugar techniques from the Dutch in Brazil, indentured servants replaced by enslaved Africans), and Encyclopedia Virginia, \"Indentured Servants in Colonial Virginia\" (enslaved Africans met most of the colony's labor needs by the end of the 1600s)"],
};

const asia = {
  id: "u4r-asia-faiths",
  caption: "Catholic missions and Muslim states in maritime Asia, c. 1510 to c. 1640",
  alt: "Map of South, Southeast, and East Asia from India to Japan. Larger circles mark ports under European rule: Goa, Portuguese from 1510, center of Catholic missions in Asia; Malacca, Portuguese from 1511; Macao, Portuguese from 1557, the Jesuit base for China and Japan; and Manila, Spanish from 1571, where most lowland Filipinos became Catholic. Smaller circles mark places under Asian rulers: Beijing, where the Jesuit Matteo Ricci served at the Ming court from 1601; Nagasaki, a Jesuit mission port in Japan, where the shogunate banned Christianity in 1614; and three Muslim states in the islands: Aceh, a sultanate and center of Islamic learning; Banten, a sultanate and pepper port on Java; and Makassar, whose ruler adopted Islam in 1605.",
  bbox: [70, -10, 142, 42], width: 680, height: 560,
  regions: [
    { name: "INDIAN OCEAN", at: [82, -4], size: 12 }, { name: "South China Sea", at: [114, 12], size: 10 }, { name: "CHINA", at: [107, 27.5], size: 12 },
    { name: "INDIA", at: [78, 22], size: 11 }, { name: "JAPAN", at: [138.5, 37.6], size: 10 }, { name: "Bay of Bengal", at: [89, 14], size: 10 },
  ],
  places: [
    { name: "Goa: Portuguese, 1510;\ncenter of Catholic\nmissions in Asia", at: [73.83, 15.5], kind: "major", label: [8, -2] },
    { name: "Malacca:\nPortuguese, 1511", at: [102.25, 2.2], kind: "major", label: [-8, 14] },
    { name: "Macao: Portuguese, 1557;\nJesuit base", at: [113.54, 22.2], kind: "major", label: [-8, 14] },
    { name: "Manila: Spanish, 1571;\nmost lowland Filipinos\nbecome Catholic", at: [120.98, 14.6], kind: "major", label: [8, 4] },
    { name: "Beijing: Jesuit Matteo Ricci\nat the Ming court, 1601", at: [116.4, 39.9], label: [-8, -14] },
    { name: "Nagasaki: Jesuit mission port;\nJapan bans Christianity, 1614", at: [129.87, 32.74], label: [-8, 18] },
    { name: "Aceh: Muslim sultanate,\ncenter of Islamic learning", at: [95.32, 5.55], label: [-8, -14] },
    { name: "Banten: Muslim\nsultanate, pepper port", at: [106.15, -6.03], label: [-8, 14] },
    { name: "Makassar: ruler\nadopts Islam, 1605", at: [119.42, -5.14], label: [8, 4] },
  ],
  legend: [
    { kind: "major", text: "Port under European rule" },
    { kind: "city", text: "Place under an Asian ruler" },
  ],
  legendAt: "top-left", legendWidth: 210,
  checked: ["Encyclopaedia Britannica, \"Matteo Ricci\" (Macao 1582, Beijing 1601) and \"Gowa\" (its ruler adopted Islam in 1605)", "Wikipedia, \"Portuguese Macau\" (settled 1557; a base for Jesuit missions to China and Japan) and \"Nagasaki\" (run by the Jesuits from 1580; Christianity banned 1614), and Encyclopaedia Britannica, \"Kirishitan\" (the ban of 1614)"],
};

const silver = {
  id: "u4r-silver",
  caption: "Main routes of silver, c. 1600 (routes approximate)",
  alt: "Map from the Americas across the Atlantic and Indian Oceans to East Asia. Silver mines are marked at Potosí in the Andes, opened 1545, and Zacatecas in Mexico, opened 1546. A solid line carries Potosí silver to the Pacific coast, north by sea to Panama, across the isthmus to Portobelo, by way of Cartagena to Havana, and across the Atlantic to Seville, where the Spanish crown took a fifth. Another solid line carries Zacatecas silver through Mexico City to Veracruz and Havana. A dashed line runs west from Acapulco across the Pacific toward Manila, and the same dashed line reaches Spanish Manila, founded 1571, from the east; from Manila it continues to the Chinese coast. A dotted line carries silver from Europe around the southern tip of Africa to Goa, Malacca, and Macao on the coast of China. Another dotted line carries silver from the Iwami mines in Japan to the Chinese coast.",
  bbox: [-112, -38, 142, 50], width: 900, height: 440,
  regions: [
    { name: "ATLANTIC OCEAN", at: [-35, 8], size: 12 }, { name: "INDIAN OCEAN", at: [72, -6], size: 12 }, { name: "PACIFIC OCEAN", at: [-100, -5], size: 11 },
    { name: "CHINA", at: [106, 32], size: 12 }, { name: "SPAIN", at: [-4, 42.5], size: 10 },
  ],
  routes: [
    { kind: "route", through: [[-65.75, -19.58], [-70.3, -18.48], [-76, -14], [-77.15, -12.05], [-81, -5], [-80, 4], [-79.52, 8.98], [-79.65, 9.55], [-77.5, 11.2], [-75.5, 10.4], [-79, 16], [-84.5, 21.6], [-82.36, 23.14], [-79.5, 25.5], [-70, 32], [-50, 36.5], [-28, 38.5], [-12, 37], [-6.35, 36.78], [-6.0, 37.39]] },
    { kind: "route", through: [[-102.58, 22.77], [-99.13, 19.43], [-96.13, 19.17], [-90, 21.8], [-85.5, 23.2], [-82.36, 23.14]] },
    { kind: "route2", through: [[-99.89, 16.86], [-106, 15.5], [-112, 13.8]] },
    { kind: "route2", through: [[142, 13.4], [135, 13.2], [126.5, 12.8], [124.3, 12.55], [122.8, 13.0], [121.6, 13.6], [120.98, 14.6], [118, 17], [115.5, 20.5], [113.54, 22.2]] },
    { kind: "sea", through: [[-9.14, 38.72], [-14, 30], [-21, 15], [-24, 0], [-22, -18], [-8, -32], [10, -36.5], [18.5, -36], [26, -35], [36, -27], [42, -15], [50, -2], [62, 9], [73.83, 15.5], [78, 7], [85, 5.5], [95, 5.8], [100, 3.8], [102.25, 2.2], [104.3, 1.3], [106, 4], [109, 9], [111.5, 15], [113.54, 22.2]] },
    { kind: "sea", through: [[132.43, 35.11], [130.5, 34], [129.87, 32.74], [125, 29], [119, 24.5], [113.54, 22.2]] },
  ],
  places: [
    { name: "Potosí: silver, 1545", at: [-65.75, -19.58], kind: "battle", label: [8, 4] },
    { name: "Zacatecas: silver, 1546", at: [-102.58, 22.77], kind: "battle", label: [0, -11] },
    { name: "Havana", at: [-82.36, 23.14], label: [8, 4] },
    { name: "Portobelo", at: [-79.65, 9.55], label: [8, 2] },
    { name: "Acapulco: galleons\nto Manila, 1565 on", at: [-99.89, 16.86], label: [4, 16] },
    { name: "Seville: the crown\ntakes a fifth", at: [-6.0, 37.39], kind: "major", label: [6, 16] },
    { name: "Goa", at: [73.83, 15.5], label: "left" },
    { name: "Malacca", at: [102.25, 2.2], label: [-8, 12] },
    { name: "Manila (Spanish, 1571)", at: [120.98, 14.6], kind: "major", label: [-10, 18] },
    { name: "Macao and\nGuangzhou", at: [113.54, 22.2], kind: "major", label: [-8, -14] },
    { name: "Iwami: silver", at: [132.43, 35.11], kind: "battle", label: [-4, -10] },
  ],
  legend: [
    { kind: "route", text: "Spanish fleets to Seville" },
    { kind: "route2", text: "Manila galleons from Acapulco, then on to China" },
    { kind: "sea", text: "Silver carried by sea to China" },
    { kind: "battle", text: "Silver mines" },
    { kind: "major", text: "Port where silver was gathered or traded" },
  ],
  legendAt: "bottom-right", legendWidth: 340,
  checked: ["World History Encyclopedia, \"Spanish Treasure Fleets\" (Potosí silver by sea to Panama and overland to Portobelo, Veracruz, Cartagena, Havana, Seville; the Manila galleons, 1565 to 1815), and Encyclopaedia Britannica, \"Manila galleon\"", "UNESCO World Heritage Centre, \"Iwami Ginzan Silver Mine and its Cultural Landscape\" (silver shipped to China and Korea in the 1500s and 1600s), Encyclopaedia Britannica, \"Potosí\" (silver found in 1545), and P. J. Bakewell, Silver Mining and Society in Colonial Mexico: Zacatecas, 1546 to 1700 (Cambridge University Press)"],
};

export const maps = [guns, north, crops, labor, asia, silver];

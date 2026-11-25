// AP U.S. History Unit 1 maps (review bank, decks/apush/u1.js). Spec format: tools/build-maps.mjs. HANDOFF.md, section 2e.

const entradas = {
  id: "u1-entradas",
  caption: "Three Spanish expeditions into North America, 1528 to 1543 (routes approximate; present-day state lines shown)",
  alt: "Map of the southern part of present-day United States and northern Mexico, with present-day state lines. A dashed line traces the Narvaez expedition from Tampa Bay in 1528 to Apalachee in northern Florida, then by raft along the Gulf coast to near Galveston Island; from there the survivors led by Cabeza de Vaca cross Texas and northern Mexico on foot and reach Spaniards near Culiacan on the Pacific side of Mexico in 1536. A solid line traces Hernando de Soto's expedition from Tampa Bay in 1539 north through Apalachee into Georgia, the Carolinas, and Tennessee, south to the battle at Mabila in Alabama in 1540, west across Mississippi to the Mississippi River in 1541, through Arkansas, and down the Mississippi to the Gulf; survivors reached Panuco in Mexico in 1543. A second solid line traces Francisco Vazquez de Coronado's expedition from Compostela in western Mexico in 1540 north to the Zuni town of Hawikuh, which the Spanish called Cibola, east to the Tiguex pueblos on the Rio Grande, and across the plains of Texas and Oklahoma to Quivira in present-day Kansas in 1541. Mexico City and St. Augustine, founded in 1565, are also marked.",
  bbox: [-112, 17, -77, 40], width: 720, height: 470, states: true,
  regions: [
    { name: "Gulf of Mexico", at: [-90.5, 25.2], size: 12 },
    { name: "Atlantic Ocean", at: [-78.2, 28.5], size: 10 },
    { name: "Coronado, 1540 to 1542", at: [-103.6, 37.6], size: 11 },
    { name: "De Soto, 1539 to 1543", at: [-86.2, 36.6], size: 11 },
    { name: "Narváez and Cabeza de Vaca,", at: [-101.4, 27.3], size: 10 },
    { name: "1528 to 1536", at: [-101.4, 26.5], size: 10 },
  ],
  routes: [
    // Narvaez: Tampa Bay to Apalachee, then rafts along the Gulf coast to near Galveston Island
    { kind: "route2", through: [[-82.6, 27.9], [-82.9, 29.0], [-83.8, 30.1], [-84.3, 30.45], [-84.4, 30.0], [-85.6, 29.7], [-87.5, 30.2], [-89.4, 30.0], [-91.5, 29.4], [-93.6, 29.6], [-94.8, 29.25]] },
    // Cabeza de Vaca: across Texas and northern Mexico to Culiacan (route debated)
    { kind: "route2", through: [[-94.8, 29.25], [-96.6, 28.5], [-98.2, 28.0], [-99.8, 27.6], [-101.5, 28.6], [-103.2, 29.4], [-104.4, 29.56], [-106.4, 29.6], [-108.4, 28.7], [-109.4, 27.3], [-108.6, 25.6], [-107.4, 24.8]] },
    // De Soto
    { kind: "route", through: [[-82.6, 27.9], [-82.4, 29.2], [-83.0, 30.0], [-84.3, 30.45], [-84.1, 31.6], [-83.6, 32.5], [-82.0, 33.3], [-80.6, 34.25], [-81.7, 35.75], [-83.1, 35.6], [-84.3, 35.6], [-84.9, 34.5], [-86.2, 33.0], [-87.6, 31.9], [-88.7, 34.26], [-90.4, 34.6], [-91.8, 35.2], [-93.1, 35.0], [-92.6, 34.0], [-91.2, 33.6], [-91.1, 31.6], [-90.4, 30.1], [-89.5, 29.3], [-91.5, 28.9], [-93.8, 29.4], [-95.6, 28.5], [-97.1, 27.2], [-97.4, 25.2], [-97.7, 23.4], [-97.9, 22.1]] },
    // Coronado
    { kind: "route", through: [[-104.9, 21.24], [-107.4, 24.8], [-109.0, 27.4], [-110.0, 29.6], [-110.2, 31.3], [-109.3, 33.7], [-108.9, 35.0], [-106.55, 35.3], [-104.0, 35.0], [-101.7, 34.9], [-100.0, 36.2], [-98.2, 38.3]] },
  ],
  places: [
    { name: "Tampa Bay, 1528, 1539", at: [-82.6, 27.9], label: "right" },
    { name: "Apalachee", at: [-84.3, 30.45], label: [6, -6] },
    { name: "Galveston Island", at: [-94.8, 29.25], label: [-6, -8] },
    { name: "Culiacán, 1536", at: [-107.4, 24.8], label: "left" },
    { name: "Mabila, 1540", at: [-87.6, 31.9], kind: "battle", label: "left" },
    { name: "Mississippi River, 1541", at: [-90.4, 34.6], label: [-10, -12] },
    { name: "Pánuco, 1543", at: [-97.9, 22.1], label: "left" },
    { name: "Compostela, 1540", at: [-104.9, 21.24], label: "left" },
    { name: "Hawikuh (Cíbola)", at: [-108.9, 35.0], label: "left" },
    { name: "Tiguex pueblos", at: [-106.55, 35.3], label: [4, -8] },
    { name: "Quivira, 1541", at: [-98.2, 38.3], label: "right" },
    { name: "Mexico City", at: [-99.13, 19.43], kind: "major", label: "right" },
    { name: "St. Augustine, 1565", at: [-81.31, 29.9], kind: "major", label: "right" },
  ],
  legend: [{ kind: "route", text: "De Soto and Coronado" }, { kind: "route2", text: "Narváez and Cabeza de Vaca" }, { kind: "battle", text: "Battle" }],
  legendAt: "bottom-left", legendWidth: 220,
  checked: ["Encyclopaedia Britannica, \"Hernando de Soto,\" \"Francisco Vázquez de Coronado,\" and \"Álvar Núñez Cabeza de Vaca\"", "National Park Service, De Soto National Memorial and Coronado National Memorial"],
};

const footholds = {
  id: "u1-footholds",
  caption: "European colonies and settlements in North America north of Mexico, 1564 to 1608, with the European power and the year founded (present-day state lines shown)",
  alt: "Map of eastern and southwestern North America with present-day state lines. Places founded by Spain: St. Augustine in Florida, 1565, which lasted; Santa Elena on the South Carolina coast, 1566, abandoned in 1587; and the colony of New Mexico on the upper Rio Grande, 1598, which lasted. Places founded by France: Fort Caroline in Florida, 1564, destroyed by Spain in 1565; Port Royal in Nova Scotia, 1605, abandoned in 1607; and Quebec on the St. Lawrence River, 1608, which lasted. Places founded by England: Roanoke on the North Carolina coast, 1585 and 1587, abandoned and lost by 1590; and Jamestown in Virginia, 1607, which lasted.",
  bbox: [-110, 25, -60, 49], width: 720, height: 430, states: true,
  regions: [
    { name: "Atlantic Ocean", at: [-68.5, 33.5], size: 12 },
    { name: "Gulf of Mexico", at: [-86.5, 26.4], size: 11 },
    { name: "Rio Grande", at: [-104.4, 32.1], size: 9 },
    { name: "St. Lawrence River", at: [-66.5, 49.3], size: 9 },
  ],
  places: [
    { name: "St. Augustine (Spain) 1565", at: [-81.31, 29.9], kind: "major", label: "left" },
    { name: "Fort Caroline (France) 1564", at: [-81.5, 30.39], label: [7, 2] },
    { name: "Santa Elena (Spain) 1566", at: [-80.68, 32.31], label: "right" },
    { name: "Jamestown (England) 1607", at: [-76.78, 37.21], kind: "major", label: "left" },
    { name: "Roanoke (England) 1585, 1587", at: [-75.66, 35.9], label: "right" },
    { name: "New Mexico (Spain) 1598", at: [-106.07, 36.05], kind: "major", label: "right" },
    { name: "Port Royal (France) 1605", at: [-65.6, 44.7], label: "below" },
    { name: "Quebec (France) 1608", at: [-71.21, 46.81], kind: "major", label: "left" },
  ],
  legend: [{ kind: "major", text: "Still held by its founders in 1610" }, { kind: "city", text: "Abandoned or destroyed by 1610" }],
  legendAt: "bottom-left", legendWidth: 260,
  checked: ["Encyclopaedia Britannica, \"St. Augustine,\" \"Fort Caroline,\" \"Roanoke Island,\" \"Jamestown Colony,\" \"Port-Royal,\" \"Quebec,\" and \"New Mexico: History\"", "National Park Service pages for Castillo de San Marcos, Fort Caroline National Memorial, Fort Raleigh National Historic Site, and Historic Jamestowne, and the Santa Elena Foundation on Santa Elena"],
};

const exchange = {
  id: "u1-exchange",
  caption: "Some plants, animals, and diseases carried across the Atlantic Ocean after 1492",
  alt: "Map of the Atlantic world: the Americas on the left, Europe and Africa on the right. An arrow line crosses the ocean from the Americas to Europe and Africa, labeled with plants first grown in the Americas: maize (corn), potatoes, cassava (manioc), tomatoes, cacao, and tobacco. A second line crosses from Europe and Africa to the Americas, labeled with plants, animals, and diseases from the Eastern Hemisphere: wheat, sugarcane, rice, bananas, horses, cattle, pigs, sheep, smallpox, measles, and malaria.",
  bbox: [-110, -25, 30, 55], width: 720, height: 460,
  regions: [
    { name: "THE AMERICAS", at: [-95, 40], size: 12 },
    { name: "EUROPE", at: [12, 50], size: 12 },
    { name: "AFRICA", at: [18, 8], size: 12 },
    { name: "Atlantic Ocean", at: [-38, 30], size: 11 },
    { name: "To Europe, Africa, and Asia:", at: [-38, 51.5], size: 11 },
    { name: "maize (corn), potatoes, cassava,", at: [-38, 48.6], size: 11 },
    { name: "tomatoes, cacao, tobacco", at: [-38, 45.7], size: 11 },
    { name: "To the Americas:", at: [-25, 3], size: 11 },
    { name: "wheat, sugarcane, rice, bananas;", at: [-25, 0], size: 11 },
    { name: "horses, cattle, pigs, sheep;", at: [-25, -3], size: 11 },
    { name: "smallpox, measles, malaria", at: [-25, -6], size: 11 },
  ],
  routes: [
    { kind: "route", through: [[-75, 36], [-55, 38], [-35, 37], [-18, 38], [-9, 40]] },
    { kind: "route2", through: [[-12, 18], [-25, 11], [-40, 9], [-55, 12], [-62, 14]] },
  ],
  legend: [{ kind: "route", text: "From the Americas" }, { kind: "route2", text: "To the Americas" }],
  legendAt: "bottom-left", legendWidth: 190,
  checked: ["Encyclopaedia Britannica, \"Columbian exchange\"", "Nathan Nunn and Nancy Qian, \"The Columbian Exchange: A History of Disease, Food, and Ideas,\" Journal of Economic Perspectives 24, no. 2 (2010)"],
};

const maize = {
  id: "u1-maize",
  caption: "Some Native farming centers north of the Valley of Mexico before 1492, with approximate dates (present-day state lines shown)",
  alt: "Map of present-day United States and Mexico with present-day state lines. Marked places: Tenochtitlan, the Mexica capital in the Valley of Mexico, founded about 1325; Chaco Canyon in present-day New Mexico, a center of Ancestral Puebloan great houses from about 850 to 1150; the Mesa Verde cliff dwellings in present-day Colorado, about 1200 to 1280; Cahokia near the Mississippi River in present-day Illinois, at its largest about 1050 to 1200; Moundville in present-day Alabama, about 1100 to 1450; towns of the Haudenosaunee (Iroquois) in present-day New York; and towns of the Powhatan peoples in present-day Virginia. Text notes that maize was grown in the Southwest by about 2000 BCE and became a staple crop in the East after about 900 CE. The Great Basin in present-day Nevada and Utah is labeled with no farming centers.",
  bbox: [-118, 16, -70, 45], width: 720, height: 470, states: true,
  regions: [
    { name: "Great Basin", at: [-116.6, 40.3], size: 11 },
    { name: "Great Plains", at: [-100.5, 41.6], size: 11 },
    { name: "Gulf of Mexico", at: [-90.5, 25.2], size: 11 },
    { name: "Maize grown in the Southwest", at: [-110.5, 31.6], size: 10 },
    { name: "by about 2000 BCE", at: [-110.5, 30.7], size: 10 },
    { name: "Maize a staple crop in the East", at: [-84.6, 29.2], size: 10 },
    { name: "after about 900 CE", at: [-84.6, 28.3], size: 10 },
  ],
  places: [
    { name: "Tenochtitlan (Mexica), founded c. 1325", at: [-99.13, 19.43], kind: "major", label: "right" },
    { name: "Chaco Canyon, c. 850 to 1150", at: [-107.96, 36.06], kind: "major", label: [-8, 14] },
    { name: "Mesa Verde, c. 1200 to 1280", at: [-108.49, 37.18], label: "left" },
    { name: "Cahokia, largest c. 1050 to 1200", at: [-90.06, 38.66], kind: "major", label: [-8, -8] },
    { name: "Moundville, c. 1100 to 1450", at: [-87.63, 33.0], label: "left" },
    { name: "Haudenosaunee (Iroquois) towns", at: [-76.0, 42.9], label: "below" },
    { name: "Powhatan towns", at: [-77.0, 37.5], label: "right" },
  ],
  legend: [{ kind: "major", text: "Large center" }, { kind: "city", text: "Other farming center or towns" }],
  legendAt: "bottom-left", legendWidth: 200,
  checked: ["Encyclopaedia Britannica, \"Cahokia,\" \"Chaco Culture National Historical Park,\" \"Mesa Verde National Park,\" \"Moundville,\" \"Iroquois Confederacy,\" \"Powhatan,\" \"Tenochtitlán,\" and \"maize\"", "National Park Service pages for Chaco Culture National Historical Park and Mesa Verde National Park, and the Cahokia Mounds State Historic Site (Illinois)"],
};

export const maps = [entradas, footholds, exchange, maize];
